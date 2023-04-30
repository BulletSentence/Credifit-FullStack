import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { format } from "date-fns";

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
      format: (row) => format(new Date(row.data), "dd/MM/yyyy HH:mm:ss"),
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
    {
      name: "Natureza",
      selector: "tipo.natureza",
      sortable: true,
    },
    {
      name: "Entrada/Saída",
      selector: "tipo.sinal",
      sortable: true,
    },
  ];

  return (
    <div>
      <DataTable
        title="Listagem de Transações"
        columns={columns}
        data={transacoes}
        pagination={true}
        paginationPerPage={10}
        paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
      />
    </div>
  );
};

export default List;
