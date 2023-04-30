import { tipo_transacao } from '@prisma/client';

export class Transacao {
  id: number;
  data: Date;
  produto?: string;
  valor?: number;
  valorCentavos?: number;
  vendedor?: string;
  tipoId: tipo_transacao;
}
