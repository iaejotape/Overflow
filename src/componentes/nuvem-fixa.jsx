import React from "react";

const NuvemFixa = ({ style, className }) => (
  <svg
    className={`nuvem-fixa ${className}`}
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

const NuvensFixas = () => {
  return (
    <div className="nuvens-fixas-container">
      <NuvemFixa 
        className="nuvem-fixa-1" 
        style={{ 
          position: "absolute", 
          top: "10%", 
          right: "5%", 
          transform: "scale(0.8)", 
          opacity: 0.8 
        }} 
      />
      <NuvemFixa 
        className="nuvem-fixa-2" 
        style={{ 
          position: "absolute", 
          bottom: "15%", 
          right: "15%", 
          transform: "scale(0.6)", 
          opacity: 0.7 
        }} 
      />
      <NuvemFixa 
        className="nuvem-fixa-3" 
        style={{ 
          position: "absolute", 
          top: "60%", 
          left: "10%", 
          transform: "scale(0.7)", 
          opacity: 0.6 
        }} 
      />
    </div>
  );
};

export default NuvensFixas;
