import { Prisma } from '@prisma/client';
import { CreateCondutaDto } from './dto/create-conduta.dto';

export class CondutasRepository {
  async create(
    trx: Prisma.TransactionClient,
    createCondutaDto: CreateCondutaDto,
    id_prontuario: number,
  ) {
    return trx.conduta.create({
      data: {
        id_prontuario,
        descricao_conduta_fisioterapeutica:
          createCondutaDto.descricao_conduta_fisioterapeutica,
      },
    });
  }
}
