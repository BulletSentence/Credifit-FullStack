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

  const mockTransacao: transacao = {
    id: 1,
    data: new Date(),
    produto: "Curso de Bem-Estar",
    valor: 100,
    vendedor: "Maria",
    tipoId: 1,
  };

  describe('findAll', () => {
    it('should return an array of transacoes', async () => {
      const transacoes: transacao[] = await service.findAll();
      expect(transacoes).toBeInstanceOf(Array);
    });
  });

  describe('findOne', () => {
    it('should return a transacao with the specified id', async () => {
      jest.spyOn(prismaService.transacao, 'findUnique').mockResolvedValueOnce(mockTransacao);
      const id = 1;
      const transacao: transacao = await service.findOne(id);
      expect(transacao).toEqual(mockTransacao);
    });


    it('should return id, valor and tipoId as int', async () => {
      jest.spyOn(prismaService.transacao, 'findUnique').mockResolvedValueOnce(mockTransacao);
      const id = 1;
      const transacao: transacao = await service.findOne(id);
      expect(Number.isInteger(transacao.id)).toBe(true);
      expect(Number.isInteger(transacao.valor)).toBe(true);
      expect(Number.isInteger(transacao.tipoId)).toBe(true);
    });
  });

  describe('create', () => {
    it('should create a new transacao', async () => {
      const transacaoData = mockTransacao;
      const createdTransacao = await service.create(transacaoData);
      expect(createdTransacao).toHaveProperty('id');
      expect(createdTransacao).toHaveProperty('data');
      expect(createdTransacao.produto).toEqual(transacaoData.produto);
      expect(createdTransacao.valor).toEqual(transacaoData.valor);
      expect(createdTransacao.vendedor).toEqual(transacaoData.vendedor);
      expect(createdTransacao.tipoId).toEqual(transacaoData.tipoId);
    });

    it('should return id, valor and tipoId as int', async () => {
      const transacaoData = mockTransacao;
      const createdTransacao = await service.create(transacaoData);
      expect(Number.isInteger(createdTransacao.id)).toBe(true);
      expect(Number.isInteger(createdTransacao.valor)).toBe(true);
      expect(Number.isInteger(createdTransacao.tipoId)).toBe(true);
    });

    it('should have a date calculated in the format UTC', async () => {
      const mockTransacaoDate: transacao = {
        id: 1,
        data: new Date("2022-01-15T19:20:30-03:00"),
        produto: "Curso de Bem-Estar",
        valor: 100,
        vendedor: "Maria",
        tipoId: 1,
      };
      const createdTransacao = await service.create(mockTransacaoDate);
      const expectedDate = "2022-01-15T22:20:30.000-03:00";
      const expectedTimezoneOffset = "-03:00";
      const receivedDate = createdTransacao.data.toISOString().replace("Z", expectedTimezoneOffset);
      expect(receivedDate).toEqual(expectedDate);
    });

    it('should receive a date in the format NNNNN-NN-NNTNN:NN:NN-NN:NN', async () => {
      const mockTransacaoDate: transacao = {
        id: 1,
        data: new Date("2022-01-15T19:20:30-03:00"),
        produto: "Curso de Bem-Estar",
        valor: 100,
        vendedor: "Maria",
        tipoId: 1,
      };
      const createdTransacao = await service.create(mockTransacaoDate);
      const expectedDate = /^[\d]{4}-[\d]{2}-[\d]{2}T[\d]{2}:[\d]{2}:[\d]{2}\.[\d]{3}-[\d]{2}:[\d]{2}$/;
      const receivedDate = createdTransacao.data.toISOString().replace('Z', '-03:00');
      expect(receivedDate).toMatch(expectedDate);
    });
  });
});

