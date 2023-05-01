/**
Sends a set of JSON data to an API endpoint via POST.
@param {Array} jsonData An array of JSON objects to be sent.
*/

export default async function sendData(jsonData) {
  const apiUrl = "http://localhost:3000/transacao";
  const promises = jsonData.map((transacao) => {
    return fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(transacao),
    }).then((response) => response.json());
  });

  Promise.all(promises).then(() => {
    window.location.replace("/list");
  });
}
