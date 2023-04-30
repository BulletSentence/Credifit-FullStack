import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";

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

  const columns = [
    {
      name: "ID",
      selector: "id",
      sortable: true,
    },
    {
      name: "Data",
      selector: "data",
      sortable: true,
    },
    {
      name: "Produto",
      selector: "produto",
      sortable: true,
    },
    {
      name: "Valor (Real)",
      selector: "valor",
      sortable: true,
    },
    {
      name: "Vendedor",
      selector: "vendedor",
      sortable: true,
    },
    {
      name: "Tipo",
      selector: "tipo.descricao",
      sortable: true,
    },
  ];

  return (
    <div className="">
      <DataTable title="Listagem de Transações" columns={columns} data={transacoes} />
    </div>
  );
};

export default List;
