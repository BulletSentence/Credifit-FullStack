/**
 * Envia um conjunto de dados JSON para um endpoint de API via POST.
 *
 * @param {Array} jsonData Um array de objetos JSON a serem enviados.
 */
export default async function sendData(jsonData) {
    const apiUrl = "http://localhost:3000/transacao"; // URL do endpoint de API

    // Itera sobre cada objeto JSON no array e envia como uma solicitação POST para a API
    for (const transacao of jsonData) {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(transacao),
      });

      // Log do objeto JSON enviado
      console.log(JSON.stringify(transacao));

      // Verifica se a resposta da API indica um erro e, em caso afirmativo, exibe uma mensagem de erro no console
      if (!response.ok) {
        console.error(
          `Erro ao enviar transação ${transacao.id}: ${response.status} ${response.statusText}`
        );
      }
    }
  }
