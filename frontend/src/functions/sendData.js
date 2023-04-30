/**
Sends a set of JSON data to an API endpoint via POST.
@param {Array} jsonData An array of JSON objects to be sent.
*/

export default async function sendData(jsonData) {
  const apiUrl = "http://localhost:3000/transacao";
  // Iterates over each JSON object in the array and sends it as a POST request to the API
  for (const transacao of jsonData) {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(transacao),
    });
  }
}
