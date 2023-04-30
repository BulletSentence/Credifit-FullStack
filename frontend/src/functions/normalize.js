import sendData from "./sendData";

export default function normalizeData(Filedata) {
  // Split file content by lines
  const lines = Filedata.split("\n");

  // Map each line to a JSON object with transaction information
  const objects = lines.map((line) => {
    // If line is empty, return null
    if (line.trim() === "") {
      return null;
    }
    // Extract information from line using position of each field
    const tipoId = line.charAt(0).trim();
    const data = line.substring(1, 26).trim();
    const produto = line.substring(26, 56).trim();
    var valor = line.substring(56, 66).trim();
    const vendedor = line.substring(66, 86).trim();

    // Convert value from cents to reais
    valor =
      valor.substring(0, valor.length - 2) +
      "." +
      valor.substring(valor.length - 2);

    // Create a JSON object with transaction information
    var json = { tipoId, data, produto, valor, vendedor };

    // Convert value in reais to a decimal number
    json.valor = parseFloat(json.valor);

    // Convert tipoId to an integer number
    json.tipoId = parseInt(json.tipoId);

    return json;
  });

  // Remove null objects from objects array
  const result = objects.filter((obj) => obj !== null);

  // Send data to server
  sendData(result);

  // Return objects array
  return result;
}
