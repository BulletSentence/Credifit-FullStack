import { Test, TestingModule } from '@nestjs/testing';
import { TransacaoService } from './transacao.service';
import { PrismaService } from '../prisma/prisma.service';
import { transacao } from '@prisma/client';

describe('TransacaoService', () => {
  let service: TransacaoService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransacaoService, PrismaService],
    }).compile();

    service = module.get<TransacaoService>(TransacaoService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  afterEach(async () => {
    await prismaService.$disconnect();
  });

  describe('findAll', () => {
    it('should return an array of transacoes', async () => {
      const transacoes: transacao[] = await service.findAll();
      expect(transacoes).toBeInstanceOf(Array);
    });
  });
});
