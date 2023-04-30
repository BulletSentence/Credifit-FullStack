import { Injectable } from '@nestjs/common';
import { Prisma, transacao, tipo_transacao } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTransacaoDto } from './dto/create-transacao.dto';

@Injectable()
export class TransacaoService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateTransacaoDto): Promise<transacao> {
  const tipoTransacao = await this.prisma.tipo_transacao.findUnique({
    where: { id: data.tipoId },
  });
  if (!tipoTransacao) {
    throw new Error(`Tipo de transação com id ${data.tipoId} não encontrado`);
  }

  const transacaoData: Prisma.transacaoCreateInput = {
    data: new Date(),
    produto: data.produto,
    valor: data.valor,
    vendedor: data.vendedor,
    tipo: { connect: { id: data.tipoId } },
  };

  return this.prisma.transacao.create({
    data: transacaoData,
    include: {
      tipo: true,
    },
  });
}

  async findAll(): Promise<transacao[]> {
    return this.prisma.transacao.findMany({
      include: {
        tipo: true,
      },
    });
  }

  async findOne(id: number): Promise<transacao | null> {
    return this.prisma.transacao.findUnique({
      where: { id },
      include: {
        tipo: true,
      },
    });
  }

  async remove(id: number): Promise<transacao> {
    return this.prisma.transacao.delete({
      where: { id },
      include: {
        tipo: true,
      },
    });
  }

  async findTransacoesPorTipo(tipoId: number): Promise<transacao[]> {
    return this.prisma.transacao.findMany({
      where: {
        tipoId,
      },
      include: {
        tipo: true,
      },
    });
  }
}
