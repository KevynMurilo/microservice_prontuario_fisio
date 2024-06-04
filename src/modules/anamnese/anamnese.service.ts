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
    if (createAnamneseDto.realizou) {
      cirurgia = await this.anamneseRepository.createCirurgia(
        trx,
        createAnamneseDto,
        anamnese.id_anamnese,
      );
    }

    const doencaConcomitante =
      await this.anamneseRepository.createDoencaConcomitante(
        trx,
        createAnamneseDto,
        anamnese.id_anamnese,
      );

    return { anamnese, cirurgia, doencaConcomitante };
  }
}
