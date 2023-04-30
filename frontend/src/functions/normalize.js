export default function normalizeData(data) {
    const lines = data.split("\n");
    const objects = lines.map((line) => {
      if (line.trim() === "") {
        return null;
      }
      const id = line.charAt(0).trim();
      const date = line.substring(1, 26).trim();
      const product = line.substring(26, 56).trim();
      const value = line.substring(56, 66).trim();
      const seller = line.substring(66, 86).trim();
      return { id, date, product, value, seller };
    });
    const result = objects.filter((obj) => obj !== null);
    console.log(result);
    return result;
  }
