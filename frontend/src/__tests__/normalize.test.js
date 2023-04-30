import normalizeData from "../functions/normalize";

describe("normalizeData", () => {
  test("should return empty array if file has no data", () => {
    const input = "";
    const expectedOutput = [];
    expect(normalizeData(input)).toEqual(expectedOutput);
  });

  test("should return array of JSON objects for file with data", () => {
    const input = "12022-01-15T19:20:30-03:00CURSO DE BEM-ESTAR            0000012750JOSE CARLOS"
    const expectedOutput = [
      {
        tipoId: 1,
        data: "2022-01-15T19:20:30-03:00",
        produto: "CURSO DE BEM-ESTAR",
        valor: 127.5,
        vendedor: "JOSE CARLOS",
      },
    ];
    expect(normalizeData(input)).toEqual(expectedOutput);
  });
});
