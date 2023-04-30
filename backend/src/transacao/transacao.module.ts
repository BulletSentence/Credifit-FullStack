import { Module } from '@nestjs/common';
import { TransacaoService } from './transacao.service';
import { TransacaoController } from './transacao.controller';

@Module({
  controllers: [TransacaoController],
  providers: [TransacaoService]
})
export class TransacaoModule {}
