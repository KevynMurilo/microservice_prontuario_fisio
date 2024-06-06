import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CreateAnamneseDto } from './dto/create-anamnese.dto';
import { CreateCirurgiaDto } from './dto/create-cirurgia.dto';
import { CreateDoencaDto } from './dto/create-doenca.dto';

@Injectable()
export class AnamneseRepository {
  async createAnamnese(
    trx: Prisma.TransactionClient,
    createAnamneseDto: CreateAnamneseDto,
  ) {
    return trx.anamnese.create({
      data: {
        queixa_principal: createAnamneseDto.queixa_principal,
        hma: createAnamneseDto.hma,
        hmp: createAnamneseDto.hmp,
        avd: createAnamneseDto.avd,
      },
    });
  }

  async createCirurgia(
    trx: Prisma.TransactionClient,
    createCirurgiaDto: CreateCirurgiaDto,
    id_anamnese: number,
  ) {
    return trx.cirurgia.create({
      data: {
        id_anamnese: id_anamnese,
        realizou: createCirurgiaDto.realizou,
        quais: createCirurgiaDto.quais,
        resultados_exames: createCirurgiaDto.resultados_exames,
      },
    });
  }

  async createDoencaConcomitante(
    trx: Prisma.TransactionClient,
    createDoencaDto: CreateDoencaDto,
    id_anamnese: number,
  ) {
    return trx.doenca_concomitante.create({
      data: {
        id_anamnese: id_anamnese,
        dm: createDoencaDto.dm,
        has: createDoencaDto.has,
        outros: createDoencaDto.outros,
      },
    });
  }
}
