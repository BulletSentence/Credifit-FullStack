import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.tipo_transacao.createMany({
    data: [
      { id: 1, descricao: 'Venda produtor', natureza: 'Entrada', sinal: '+' },
      { id: 2, descricao: 'Venda afiliado', natureza: 'Entrada', sinal: '+' },
      { id: 3, descricao: 'Comissão paga', natureza: 'Saída', sinal: '-' },
      { id: 4, descricao: 'Comissão recebida', natureza: 'Entrada', sinal: '+' },
    ],
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    const tiposTransacoes = await prisma.tipo_transacao.findMany();
    console.log(tiposTransacoes);
    await prisma.$disconnect();
  });
