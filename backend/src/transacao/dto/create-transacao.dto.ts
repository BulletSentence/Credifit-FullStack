import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateTransacaoDto {
  @IsOptional()
  @IsNumber()
  id?: number;

  @IsOptional()
  @IsDate()
  data?: Date;

  @IsOptional()
  @IsString()
  produto?: string;

  @IsOptional()
  @IsNumber()
  valor?: number;

  @IsOptional()
  @IsString()
  vendedor?: string;

  @IsNumber()
  tipoId: number;
}
