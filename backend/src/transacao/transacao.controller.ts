import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransacaoService } from './transacao.service';
import { CreateTransacaoDto } from './dto/create-transacao.dto';

@Controller('transacao')
export class TransacaoController {
  constructor(private readonly transacaoService: TransacaoService) {}

  @Post()
  create(@Body() createTransacaoDto: CreateTransacaoDto) {
    return this.transacaoService.create(createTransacaoDto);
  }

  @Get()
  findAll() {
    return this.transacaoService.findAll();
  }
}
