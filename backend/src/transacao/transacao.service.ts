import { Injectable } from '@nestjs/common';
import { Prisma, transacao, tipo_transacao } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTransacaoDto } from './dto/create-transacao.dto';

@Injectable()
export class TransacaoService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateTransacaoDto): Promise<transacao> {
    // Find the type of transaction by its id
    const tipoTransacao = await this.prisma.tipo_transacao.findUnique({
      where: { id: data.tipoId },
    });
    if (!tipoTransacao) {
      throw new Error(`Transaction type with id ${data.tipoId} not found`);
    }

    // Create the transaction with the given data and connect it to its type
    const transacaoData: Prisma.transacaoCreateInput = {
      data: data.data,
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
    // Find all transactions and include their type
    return this.prisma.transacao.findMany({
      include: {
        tipo: true,
      },
    });
  }

  async findOne(id: number): Promise<transacao | null> {
    // Find a transaction by its id and include its type
    return this.prisma.transacao.findUnique({
      where: { id },
      include: {
        tipo: true,
      },
    });
  }

  async remove(id: number): Promise<transacao> {
    // Remove a transaction by its id and include its type
    return this.prisma.transacao.delete({
      where: { id },
      include: {
        tipo: true,
      },
    });
  }

  async findTransacoesPorTipo(tipoId: number): Promise<transacao[]> {
    // Find all transactions of a given type and include their type
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
