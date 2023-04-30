
export function readFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = function (event) {
      const text = event.target.result;
      resolve(text);
    };
    reader.onerror = function (event) {
      reject(event.target.error);
    };
    reader.readAsText(file);
  });
}
