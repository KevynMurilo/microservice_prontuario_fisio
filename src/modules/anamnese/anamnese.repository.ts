import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { Prisma } from '@prisma/client';
import { CreateAnamneseDto } from './dto/create-anamnese.dto';

@Injectable()
export class AnamneseRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createAnamnese(
    trx: Prisma.TransactionClient,
    createAnamneseDto: CreateAnamneseDto,
    id_prontuario: number,
  ) {
    return trx.anamnese.create({
      data: {
        id_prontuario,
        queixa_principal: createAnamneseDto.queixa_principal,
        hma: createAnamneseDto.hma,
        hmp: createAnamneseDto.hmp,
        avd: createAnamneseDto.avd,
      },
    });
  }

  async createCirurgia(
    trx: Prisma.TransactionClient,
    createAnamneseDto: CreateAnamneseDto,
    id_anamnese: number,
  ) {
    return trx.cirurgia.create({
      data: {
        id_anamnese: id_anamnese,
        realizou: createAnamneseDto.realizou,
        quais: createAnamneseDto.quais,
        resultados_exames: createAnamneseDto.resultados_exames,
      },
    });
  }

  async createDoencaConcomitante(
    trx: Prisma.TransactionClient,
    createAnamneseDto: CreateAnamneseDto,
    id_anamnese: number,
  ) {
    return trx.doenca_concomitante.create({
      data: {
        id_anamnese: id_anamnese,
        dm: createAnamneseDto.dm,
        has: createAnamneseDto.has,
        outros: createAnamneseDto.outros,
      },
    });
  }
}
