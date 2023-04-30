import sendData from "./sendData";

export default function normalizeData(Filedata) {
  // divide o conteúdo do arquivo por linhas
  const lines = Filedata.split("\n");

  // mapeia cada linha para um objeto JSON com as informações da transação
  const objects = lines.map((line) => {
    // se a linha estiver vazia, retorna null
    if (line.trim() === "") {
      return null;
    }

    // extrai as informações da linha usando a posição de cada campo
    const tipoId = line.charAt(0).trim();
    const data = line.substring(1, 26).trim();
    const produto = line.substring(26, 56).trim();
    var valor = line.substring(56, 66).trim();
    const vendedor = line.substring(66, 86).trim();

    // transforma o valor em centavos para valor em reais
    valor = valor.substring(0, valor.length - 2) + "." + valor.substring(valor.length - 2);

    // cria um objeto JSON com as informações da transação
    var json = { tipoId, data, produto, valor, vendedor };

    // transforma o valor em reais em um número decimal
    json.valor = parseFloat(json.valor);

    // transforma o tipoId em um número inteiro
    json.tipoId = parseInt(json.tipoId);

    return json;
  });

  // remove os objetos nulos do array de objetos
  const result = objects.filter((obj) => obj !== null);

  // envia os dados para o servidor
  sendData(result);

  // retorna o array de objetos
  return result;
}
