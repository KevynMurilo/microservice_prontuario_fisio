import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CreateAnamneseDto } from './dto/create-anamnese.dto';
import { AnamneseRepository } from './anamnese.repository';

@Injectable()
export class AnamneseService {
  constructor(private readonly anamneseRepository: AnamneseRepository) {}

  async create(
    trx: Prisma.TransactionClient,
    createAnamneseDto: CreateAnamneseDto,
    id_prontuario: number,
  ) {
    const anamnese = await this.anamneseRepository.createAnamnese(
      trx,
      createAnamneseDto,
      id_prontuario,
    );

    let cirurgia = null;
    for (cirurgia of createAnamneseDto.cirurgias) {
      if (cirurgia.realizou) {
        await this.anamneseRepository.createCirurgia(
          trx,
          cirurgia,
          anamnese.id_anamnese,
        );
      }
    }

    let doenca = null;
    for (doenca of createAnamneseDto.doencas_concomitantes) {
      await this.anamneseRepository.createDoencaConcomitante(
        trx,
        doenca,
        anamnese.id_anamnese,
      );
    }

    return { anamnese, cirurgia, doenca };
  }
}
