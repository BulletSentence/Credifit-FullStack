import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { TransacaoModule } from './transacao/transacao.module';

@Module({
  imports: [PrismaModule, TransacaoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
