-- CreateTable
CREATE TABLE "transacao" (
    "id" SERIAL NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "produto" TEXT,
    "valor" INTEGER,
    "vendedor" TEXT,
    "tipoId" INTEGER NOT NULL,

    CONSTRAINT "transacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipo_transacao" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT,
    "natureza" TEXT,
    "sinal" TEXT,

    CONSTRAINT "tipo_transacao_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "transacao" ADD CONSTRAINT "transacao_tipoId_fkey" FOREIGN KEY ("tipoId") REFERENCES "tipo_transacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
