// utils/linguagensConfig.js
import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import { python } from "@codemirror/lang-python";

export const exemplosPorLinguagem = {
  c: `// Exemplo em C\n#include <stdio.h>\nint main() {\n    printf("Olá Mundo!");\n    return 0;\n}`,
  cpp: `// Exemplo em C++\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << "Olá Mundo!" << endl;\n    return 0;\n}`,
  Java: `// Exemplo em Java\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println("Olá Mundo!");\n    }\n}`,
  Python: `# Exemplo em Python\nprint("Olá Mundo!")`
};

export const extensoesPorLinguagem = {
  c: cpp(),
  cpp: cpp(),
  Java: java(),
  Python: python()
};