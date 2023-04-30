import { readFile } from "../utils/readfile.js";
import { act } from "react-dom/test-utils";

describe("readFile", () => {
  let selectedFile = null;

  function handleFileChange(event) {
    const file = event.target.files[0];
    if (file.type !== "text/plain") {
      selectedFile = null;
      return;
    }
    selectedFile = file;
  }

  test("should read file successfully", async () => {
    // Criar um arquivo de teste
    const file = new File(["test data"], "test.txt", { type: "text/plain" });
    const text = await readFile(file);
    expect(text).toEqual("test data");
  });

  test("should read only .txt", async () => {
    // checks if it is a .txt file
    const file = new File(["test data"], "test.txt", { type: "text/plain" });
    await act(async () => {
      handleFileChange({
        target: {
          files: [file],
        },
      });
    });
    expect(selectedFile).toEqual(file);

    // checks if it is not a .txt file
    const file2 = new File(["test data"], "test.pdf", { type: "text/plain" });
    await act(async () => {
      handleFileChange({
        target: {
          files: [file2],
        },
      });
    });
    expect(selectedFile).toEqual(new File([], "", { type: "text/plain" }));
  });
});

describe("Should not be a Empty File", () => {
  test("should read file with multiple lines", async () => {
    const file = new File(["line1\nline2"], "test.txt", {
      type: "text/plain",
    });
    const text = await readFile(file);
    expect(text).toEqual("line1\nline2");
  });
});


