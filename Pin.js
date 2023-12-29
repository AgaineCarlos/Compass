// Gerar um PIN aleatório de quatro dígitos
const pinCorreto = Math.floor(Math.random() * 9000) + 1000;

// Função para verificar o PIN inserido e fornecer dicas
function verificarPIN(pinInserido) {
  const pinCorretoArray = Array.from(String(pinCorreto));
  const pinInseridoArray = Array.from(String(pinInserido));

  // Verificar se o PIN está correto
  if (pinInserido === pinCorreto) {
    return "Parabéns! PIN correto!";
  } else {
    // Inicializar variáveis para dicas
    let dica = "";

    // Verificar dicas
    for (let i = 0; i < 4; i++) {
      if (pinInseridoArray[i] > pinCorretoArray[i]) {
        dica = "Muito maior";
        break;
      } else if (pinInseridoArray[i] < pinCorretoArray[i]) {
        dica = "Muito menor";
        break;
      }
    }

    // Se não houver dicas muito maiores ou muito menores, forneça dica de maior ou menor
    if (!dica) {
      dica = pinInserido > pinCorreto ? "Menor" : "Maior";
    }

    return `Tente novamente. O próximo valor deve ser ${dica} que o informado.`;
  }
}

// Exemplo de uso
const prompt = require("prompt-sync")(); // Para entrada de usuário via console
const pinInseridoPeloUsuario = parseInt(prompt("Digite um número de no mínimo quatro dígitos: "));
const resultadoVerificacao = verificarPIN(pinInseridoPeloUsuario);
console.log(resultadoVerificacao);
