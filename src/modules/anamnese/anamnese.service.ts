import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CreateAnamneseDto } from './dto/create-anamnese.dto';
import { CreateCirurgiaDto } from './dto/create-cirurgia.dto';
import { CreateDoencaDto } from './dto/create-doenca.dto';
import { AnamneseRepository } from './anamnese.repository';

@Injectable()
export class AnamneseService {
  constructor(private readonly anamneseRepository: AnamneseRepository) {}

  private async createAnamnese(
    trx: Prisma.TransactionClient,
    createAnamneseDto: CreateAnamneseDto,
    id_prontuario: number,
  ) {
    return await this.anamneseRepository.createAnamnese(
      trx,
      createAnamneseDto,
      id_prontuario,
    );
  }

  private async createCirurgias(
    trx: Prisma.TransactionClient,
    cirurgias: CreateCirurgiaDto[],
    id_anamnese: number,
  ): Promise<CreateCirurgiaDto[]> {
    const results: CreateCirurgiaDto[] = [];
    for (const cirurgia of cirurgias) {
      if (cirurgia.realizou) {
        const result = await this.anamneseRepository.createCirurgia(
          trx,
          cirurgia,
          id_anamnese,
        );
        results.push(result);
      }
    }
    return results;
  }

  private async createDoencasConcomitantes(
    trx: Prisma.TransactionClient,
    doencas: CreateDoencaDto[],
    id_anamnese: number,
  ): Promise<CreateDoencaDto[]> {
    const results: CreateDoencaDto[] = [];
    for (const doenca of doencas) {
      const result = await this.anamneseRepository.createDoencaConcomitante(
        trx,
        doenca,
        id_anamnese,
      );
      results.push(result);
    }
    return results;
  }

  async create(
    trx: Prisma.TransactionClient,
    createAnamneseDto: CreateAnamneseDto,
    id_prontuario: number,
  ) {
    const anamnese = await this.createAnamnese(
      trx,
      createAnamneseDto,
      id_prontuario,
    );

    const cirurgias = await this.createCirurgias(
      trx,
      createAnamneseDto.cirurgias,
      anamnese.id_anamnese,
    );

    const doencas = await this.createDoencasConcomitantes(
      trx,
      createAnamneseDto.doencas_concomitantes,
      anamnese.id_anamnese,
    );

    return { anamnese, cirurgias, doencas };
  }
}
