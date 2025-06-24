require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); 
app.use(express.json()); 

// Teste de url do servidor
app.get('/', (req, res) => {
    res.send('Backend do Judge0 rodando!');
});

// Endpoint do editor geral
app.post('/api/run-code', async (req, res) => {
    
    const { source_code, language_id, stdin } = req.body;

    if (!source_code || !language_id) {
        return res.status(400).json({ error: 'Selecione a Linguagem(language ID).' });
    }

    const JUDGE0_API_URL = process.env.JUDGE0_API_URL;

    try {
        // converter o source_code e stdin para Base64(Evitar b.o com os acentos)
        const encodedSourceCode = Buffer.from(source_code, 'utf8').toString('base64');
        const encodedStdin = Buffer.from(stdin || '', 'utf8').toString('base64');

        const submissionResponse = await axios.post(`${JUDGE0_API_URL}/submissions`, {
            language_id: language_id,
            source_code: encodedSourceCode, // <-- Envia em Base64
            stdin: encodedStdin,           // <-- Envia em Base64
        }, {
            params: { 
                base64_encoded: 'true', // Ativa a Base64 no Judge
                fields: '*' 
            }
        });

        const token = submissionResponse.data.token;

        let result;
        let statusId;
        const maxAttempts = 10; 
        let attempt = 0;

        do {
            await new Promise(resolve => setTimeout(resolve, 1000)); 
            attempt++;

            const checkResponse = await axios.get(`${JUDGE0_API_URL}/submissions/${token}`, {
                params: { 
                    base64_encoded: 'true',
                    fields: '*' 
                }
            });
            result = checkResponse.data;
            statusId = result.status.id;

            if (attempt >= maxAttempts && (statusId === 1 || statusId === 2)) {
                return res.status(500).json({ status: 'error', message: 'Tempo limite de avaliação excedido: Judge0 demorou demais para responder.', details: result });
            }

        } while (statusId <= 2); 

        // Decodificar stdout, stderr, compile_output de volta para UTF-8 antes de enviar ao frontend
        if (result.stdout) result.stdout = Buffer.from(result.stdout, 'base64').toString('utf8');
        if (result.stderr) result.stderr = Buffer.from(result.stderr, 'base64').toString('utf8');
        if (result.compile_output) result.compile_output = Buffer.from(result.compile_output, 'base64').toString('utf8');

        res.json(result);

    } catch (error) {
        console.error('Erro ao comunicar com o Judge0:', error.response ? error.response.data : error.message);
        res.status(500).json({ 
            status: 'error',
            message: 'Falha ao executar o código.', 
            details: error.response ? error.response.data : error.message 
        });
    }
});


// Endpoint de avaliação 
app.post('/api/evaluate-code', async (req, res) => {
    const { source_code, language_id, stdin } = req.body;

    const expectedOutput = "Olá Overflows!!\n"; // Teste do banco...

    if (!source_code || !language_id) {
        return res.status(400).json({ error: 'Selecione a Linguagem(language ID).' });
    }

    const JUDGE0_API_URL = process.env.JUDGE0_API_URL;

    try {

        const encodedSourceCode = Buffer.from(source_code, 'utf8').toString('base64');
        const encodedStdin = Buffer.from(stdin || '', 'utf8').toString('base64');

        const submissionResponse = await axios.post(`${JUDGE0_API_URL}/submissions`, {
            language_id: language_id,
            source_code: encodedSourceCode,
            stdin: encodedStdin,
        }, {
            params: {
                base64_encoded: 'true',
                fields: '*' 
            }
        });

        const token = submissionResponse.data.token;

        let result;
        let statusId;
        const maxAttempts = 10; 
        let attempt = 0;

        do {
            await new Promise(resolve => setTimeout(resolve, 1000)); 
            attempt++;

            const checkResponse = await axios.get(`${JUDGE0_API_URL}/submissions/${token}`, {
                params: {
                    base64_encoded: 'true',
                    fields: '*' 
                }
            });
            result = checkResponse.data;
            statusId = result.status.id;

            if (attempt >= maxAttempts && (statusId === 1 || statusId === 2)) {
                return res.status(500).json({ status: 'error', message: 'Tempo limite de avaliação excedido: Judge0 demorou demais para responder.', details: result });
            }

        } while (statusId <= 2); 

        if (result.stdout) result.stdout = Buffer.from(result.stdout, 'base64').toString('utf8');
        if (result.stderr) result.stderr = Buffer.from(result.stderr, 'base64').toString('utf8');
        if (result.compile_output) result.compile_output = Buffer.from(result.compile_output, 'base64').toString('utf8');


        if (result.status.id === 3) { // Status 3 = Accepted
            const actualOutput = result.stdout || "";
            
            if (actualOutput.trim() === expectedOutput.trim()) {
                return res.json({ status: 'success', message: 'Código correto! 🎉' });
            } else {
                return res.json({ status: 'failed', message: `Saída incorreta. Esperado: "${expectedOutput.trim()}", Recebido: "${actualOutput.trim()}"` });
            }
        } else if (result.status.id === 6) { // Status 6 = Compilation Error
            return res.json({ status: 'compile_error', message: result.compile_output || 'Erro de compilação desconhecido.' });
        } else if (result.status.id >= 7 && result.status.id <= 12) { // Status 7-12 = Runtime Errors
            return res.json({ status: 'runtime_error', message: result.stderr || 'Erro de execução desconhecido.' });
        } else if (result.status.id === 5) { // Status 5 = Time Limit Exceeded
            return res.json({ status: 'failed', message: 'Tempo limite excedido.' });
        } else if (result.status.id === 4) { // Status 4 = Wrong Answer
            return res.json({ status: 'failed', message: `Saída incorreta (Wrong Answer). Esperado: "${expectedOutput.trim()}", Recebido: "${(result.stdout || "").trim()}"` });
        }
        else {
            return res.json({ status: 'unknown_error', message: `Erro desconhecido do Judge0. Status: ${result.status.description}`, details: result });
        }

    } catch (error) {
        console.error('Erro ao comunicar com o Judge0:', error.response ? error.response.data : error.message);
        res.status(500).json({ 
            status: 'error',
            message: 'Falha interna ao processar a submissão. Verifique o servidor Judge0.', 
            details: error.response ? error.response.data : error.message 
        });
    }
});

app.listen(port, () => {
    console.log(`Backend server running on http://localhost:${port}`);
});