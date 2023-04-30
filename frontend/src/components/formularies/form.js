import React, { useState } from "react";
import { readFile } from "../../utils/readfile.js";
import normalizeData from "../../functions/normalize.js";
import "../../bulma.css";
import "./form.css";

function Formulario() {
  // Define initial state of file as empty string
  const [file, setFile] = useState("");

  // Handle file change event
  const handleFileChange = (event) => {
    // Set selected file as current state
    setFile(event.target.files[0]);
  };

  // Handle form submit event
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Read selected file and normalize data
    readFile(file).then((text) => {
      normalizeData(text);
      setFile("");
    });
  };

  // Render form component
  // form accept only text files
  return (
    <div>
      <form className="formulario" onSubmit={handleFormSubmit}>
        <label className="custom-file-upload">
          <input type="file" accept=".txt" onChange={handleFileChange} />
        </label>
        <button type="submit">Enviar Arquivo</button>
      </form>
    </div>
  );
}

export default Formulario;
