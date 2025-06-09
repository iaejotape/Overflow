const calendario = document.getElementById('calendario');
const today = new Date();
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();
const currentDay = today.getDate();

function createCalendar(month, year){
    const monthNames = [
            "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", 
            "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
        ];
        const totalDays = new Date(year, month + 1,0).getDate();
        const firstDayIndex = new Date(year, month, 1).getDay();

        let html = `<div class="titulo-calendario"><span id="month-year"><i class='bx bx-calendar-alt'></i> ${monthNames[month]}</span><span class="ano" id="month-year">${year}</span></div>`;
        html += '<table style="width: 100%;">';
            html += '<tr><th>Seg</th><th>Ter</th><th>Qua</th><th>Qui</th><th>Sex</th><th>Sáb</th><th>Dom</th></tr>';

            let day = 1;
            for(let i = 0; i < 6; i++){
                html+= '<tr>';
                    for(let j = 0; j < 7; j++){
                        if (i === 0 && j < firstDayIndex){
                            html += '<td></td>';
                        } else if (day > totalDays){
                            break;
                        } else{
                            const classNames = [];
                            if (day === currentDay && month === currentMonth && year === currentYear){
                                classNames.push('today');
                            }
                            html += `<td class="${classNames.join('')}">${day}</td>`;
                            day++;
                        }
                    }
                    html += '</tr>';
            }
            html += '</table>';

            calendario.innerHTML = html;
    }

    createCalendar(currentMonth, currentYear);

    document.addEventListener('mouseover', function (event) {
            if (event.target.tagName === 'TD' && event.target.textContent !== '') {
                event.target.classList.add('highlight');
            }
        });

    document.addEventListener('mouseout', function(event){
        if (event.target.tagName === 'TD'){
            event.target.classList.remove('highlight');
        }
    });