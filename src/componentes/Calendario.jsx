import { useMemo } from "react";
import styles from "../styles/inicio.module.css";

export default function Calendario() {
  const hoje = new Date();
  const currentMonth = hoje.getMonth();
  const currentYear = hoje.getFullYear();
  const currentDay = hoje.getDate();

  const diasSemana = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];
  const nomesMes = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", 
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  const diasDoMes = useMemo(() => {
    const totalDias = new Date(currentYear, currentMonth + 1, 0).getDate();
    const primeiroDiaIndex = new Date(currentYear, currentMonth, 1).getDay();
    const semanas = [];
    let dia = 1;

    for (let i = 0; i < 6; i++) {
      const semana = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < (primeiroDiaIndex === 0 ? 6 : primeiroDiaIndex - 1)) {
          semana.push(null);
        } else if (dia > totalDias) {
          semana.push(null);
        } else {
          semana.push(dia++);
        }
      }
      semanas.push(semana);
    }

    return semanas;
  }, [currentMonth, currentYear]);

  return (
    <div className={styles.calendarioContainer}>
      <div className={styles.tituloCalendario}>
        <span><i className="bx bx-calendar-alt"></i> {nomesMes[currentMonth]}</span>
        <span className={styles.anoCalendario}>{currentYear}</span>
      </div>
      <table className={styles.calendario}>
        <thead>
          <tr>
            {diasSemana.map((dia, index) => (
              <th key={index}>{dia}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {diasDoMes.map((semana, i) => (
            <tr key={i}>
              {semana.map((dia, j) => (
                <td
                  key={j}
                  className={
                    dia === currentDay ? styles.today : undefined
                  }
                >
                  {dia || ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
