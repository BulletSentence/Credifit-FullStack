import React, { useState } from "react";
import { readFile } from "../../utils/readfile.js";
import normalizeData from "../../functions/normalize.js";
import "../../bulma.css";
import "./form.css";

function Formulario() {
  // Define o estado inicial do arquivo como vazio
  const [file, setFile] = useState("");

  // Manipula o evento de alteração de arquivo
  const handleFileChange = (event) => {
    // Define o arquivo selecionado como estado atual
    setFile(event.target.files[0]);
  };

  // Manipula o evento de envio do formulário
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Lê o arquivo selecionado e normaliza os dados
    readFile(file).then((text) => {
      normalizeData(text);
      // Limpa o estado do arquivo
      setFile("");
    });
  };

  // Renderiza o componente do formulário
  return (
    <div>
      <form className="formulario" onSubmit={handleFormSubmit}>
        <label className="custom-file-upload">
          <input type="file" onChange={handleFileChange} />
        </label>
        <button type="submit">Enviar Arquivo</button>
      </form>
    </div>
  );
}

export default Formulario;
