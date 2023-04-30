import React, { useState, useEffect } from "react";

const List = () => {
  const [transacoes, setTransacoes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/transacao");
      const data = await response.json();
      setTransacoes(data);
    }
    fetchData();
  }, []);

  return (
    /* centralizar tabela com a classe do bulma */
    <div className="is-flex is-justify-content-center">
      <table className="table mt-6">
        <thead>
          <tr>
            <th>ID</th>
            <th>Data</th>
            <th>Produto</th>
            <th>Valor (Real)</th>
            <th>Vendedor</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {transacoes.map((transacao) => (
            <tr key={transacao.id}>
              <td>{transacao.id}</td>
              <td>{transacao.data}</td>
              <td>{transacao.produto}</td>
              <td>{transacao.valor}</td>
              <td>{transacao.vendedor}</td>
              <td>{transacao.tipo.descricao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
