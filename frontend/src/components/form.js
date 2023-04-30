import React, { useState } from "react";
import { readFile } from "../utils/readfile.js";
import normalizeData from "../functions/normalize.js";

function Formulario() {
  const [file, setFile] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    readFile(file).then((text) => {
      const data = normalizeData(text);
      console.log(data);
    });
  };

  return (
    <div>
      <form className="formulario" onSubmit={handleFormSubmit}>
        <h2>Arquivo de transações</h2>
        <label className="custom-file-upload">
          <input type="file" onChange={handleFileChange} />
        </label>
        <button type="submit">Enviar Arquivo</button>
      </form>
    </div>
  );
}

export default Formulario;
