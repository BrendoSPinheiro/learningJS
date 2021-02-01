function compras(trabalho1, trabalho2) {
  const comprarSorvete = trabalho1 || trabalho2; // ou lógico
  const comprarTv50 = trabalho1 && trabalho2; // e lógico
  const comprarTv32BW = !!(trabalho1 ^ trabalho2) // bitwise xor (OU exclusivo)
  const comprarTv32 = trabalho1 != trabalho2 // ou exclusivo pode ser simulado pela diferença
  const manterSaudavel = !comprarSorvete; // negação lógica

  return {
    comprarSorvete,
    comprarTv50,
    comprarTv32,
    manterSaudavel,
  }
}

console.log(compras(false, false));