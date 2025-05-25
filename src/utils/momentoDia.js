export function pegarHora() {
  const hora = new Date().getHours();
  if (hora >= 0 && hora < 12) return "Bom dia";
  if (hora < 18) return "Boa tarde";
  return "Boa noite";
}
