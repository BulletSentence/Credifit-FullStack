import React from "react";
import DataTable from "react-data-tables";

const DataTables = ({ data }) => {
  const columns = [
    { name: "Data", selector: "data" },
    { name: "Produto", selector: "produto" },
    { name: "Valor", selector: "valor" },
    { name: "Vendedor", selector: "vendedor" },
  ];

  return (
    <DataTable
      columns={columns}
      data={data}
      title="Transações"
      pagination
    />
  );
};

export default DataTables;
