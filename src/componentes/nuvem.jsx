import React from "react";
import "../styles/nuvem.css";

const Nuvem = ({ style, className }) => (
  <svg
    className={`nuvem ${className}`}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    width="120"
    height="108"
    viewBox="0 0 173 108"
    fill="none"
  >
    <circle cx="137.33" cy="71.34" r="35.67" fill="#D9D9D9" />
    <circle cx="77.58" cy="35.67" r="35.67" fill="#D9D9D9" />
    <circle cx="35.67" cy="71.34" r="35.67" fill="#D9D9D9" />
    <rect x="41.91" y="35.67" width="89.18" height="71.34" fill="#D9D9D9" />
  </svg>
);

const NuvensAnimadas = () => {
  const gerarNuvens = () => {
    const linhasNuvens = [];


    // Linha superior (8 nuvens em vez de 12)
    for (let i = 0; i < 8; i++) {
      linhasNuvens.push({
        top: `${3 + Math.random() * 20}%`, // Entre 3% e 23%
        size: 0.7 + Math.random() * 0.5, // Tamanhos um pouco menores
        delay: i * 0.15, // Delay maior entre cada nuvem (0.15s)
        tipo: i % 8,
      });
    }

    // Linha inferior (8 nuvens em vez de 12)
    for (let i = 0; i < 8; i++) {
      linhasNuvens.push({
        top: `${75 + Math.random() * 20}%`, // Entre 75% e 95%
        size: 0.7 + Math.random() * 0.5,
        delay: i * 0.15 + 0.07, // Offset para não coincidir
        tipo: (i + 3) % 8,
      });
    }

    // Reduzindo as nuvens do meio para apenas 3
    for (let i = 0; i < 3; i++) {
      linhasNuvens.push({
        top: `${35 + Math.random() * 30}%`, // Entre 35% e 65%
        size: 0.6 + Math.random() * 0.3, // Ainda menores no meio
        delay: i * 0.25 + 0.1,
        tipo: (i + 5) % 8,
      });
    }

    // Segundo conjunto com menos nuvens (6 em vez de 12)
    // Parte superior
    for (let i = 0; i < 6; i++) {
      linhasNuvens.push({
        top: `${5 + Math.random() * 20}%`,
        size: 0.7 + Math.random() * 0.5,
        delay: i * 0.15 + 1.2,
        tipo: (i + 2) % 8,
      });
    }

    // Parte inferior
    for (let i = 0; i < 6; i++) {
      linhasNuvens.push({
        top: `${75 + Math.random() * 20}%`,
        size: 0.7 + Math.random() * 0.5,
        delay: i * 0.15 + 1.3,
        tipo: (i + 6) % 8,
      });
    }

    return linhasNuvens;
  };

  const nuvens = gerarNuvens();

  return (
    <div className="ceu">
      {nuvens.map((n, i) => (
        <Nuvem
          key={i}
          className={`nuvem${n.tipo + 1}`}
          style={{
            top: n.top,
            transform: `scale(${n.size})`,
            animationDelay: `${n.delay}s`,
            position: "absolute",
            opacity: 0.8,
          }}
        />
      ))}
    </div>
  );
};

export default NuvensAnimadas;
