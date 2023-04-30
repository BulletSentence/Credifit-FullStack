import React from "react";
import Formulario from "../components/formularies/form";
import "../bulma.css";

const Home = () => (
  <div>
    <div className="is-flex is-justify-content-center mt-6">
      <h3 className="title is-1">Upload do Arquivo de Transações</h3>
    </div>

    <div className="is-flex is-justify-content-center mt-6">
      <Formulario />
    </div>
  </div>
);

export default Home;
