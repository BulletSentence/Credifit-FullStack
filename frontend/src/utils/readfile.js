// This code exports a function called `readFile`, which takes a file object as its argument.
// It returns a Promise that resolves to the text content of the file.

export function readFile(file) {
  return new Promise((resolve, reject) => {
    // Create a new FileReader object.
    const reader = new FileReader();

    // Set up an onload event handler that resolves the Promise with the text content of the file
    reader.onload = function (event) {
      const text = event.target.result;
      resolve(text);
    };
    reader.onerror = function (event) {
      reject(event.target.error);
    };

    // Read the file using the readAsText method of the FileReader object, which converts the file to a text string.
    reader.readAsText(file);
  });
}
