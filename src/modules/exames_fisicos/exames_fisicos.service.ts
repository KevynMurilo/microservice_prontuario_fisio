import { Injectable } from '@nestjs/common';
import { ExamesFisicosRepository } from './exames-fisicos.repository';
import { CreateExamesFisicosDto } from './dto/create-exames-fisicos.dto';
import { Exame_Fisico, Prisma } from '@prisma/client';
import { CreateForcaMuscularDto } from './dto/create-forca-muscular.dto';
import { CreateAdmDto } from './dto/create-adm.dto';
import { CreateComplementoDto } from './dto/create-complemento.dto';

@Injectable()
export class ExamesFisicosService {
  constructor(
    private readonly examesFisicosRepository: ExamesFisicosRepository,
  ) {}

  private async createExamesFisicos(
    trx: Prisma.TransactionClient,
    createExamesFisicosDto: CreateExamesFisicosDto,
  ): Promise<Exame_Fisico> {
    return await this.examesFisicosRepository.createExamesFisicos(
      trx,
      createExamesFisicosDto,
    );
  }

  private async createForcaMuscular(
    trx: Prisma.TransactionClient,
    createForcaMuscularDto: CreateForcaMuscularDto[],
    id_exames_fisicos: number,
  ): Promise<CreateForcaMuscularDto[]> {
    const results = [];
    for (const forcaMuscular of createForcaMuscularDto) {
      if (forcaMuscular) {
        const result = await this.examesFisicosRepository.createForcaMuscular(
          trx,
          forcaMuscular,
          id_exames_fisicos,
        );
        results.push(result);
      }
    }
    return results;
  }

  private async createAdm(
    trx: Prisma.TransactionClient,
    createAdmDto: CreateAdmDto[],
    id_exames_fisicos: number,
  ): Promise<CreateAdmDto[]> {
    const results = [];
    for (const adm of createAdmDto) {
      if (adm) {
        const result = await this.examesFisicosRepository.createAdm(
          trx,
          adm,
          id_exames_fisicos,
        );
        results.push(result);
      }
    }
    return results;
  }

  private async createComplemento(
    trx: Prisma.TransactionClient,
    createComplementoDto: CreateComplementoDto,
  ): Promise<CreateComplementoDto> {
    return this.examesFisicosRepository.createComplemento(
      trx,
      createComplementoDto,
    );
  }

  async create(
    trx: Prisma.TransactionClient,
    createExamesFisicosDto: CreateExamesFisicosDto,
  ): Promise<any> {
    const examesFisicos = await this.createExamesFisicos(
      trx,
      createExamesFisicosDto,
    );

    const forcaMuscular = await this.createForcaMuscular(
      trx,
      createExamesFisicosDto.forca_muscular,
      examesFisicos.id_exames_fisicos,
    );

    const adm = await this.createAdm(
      trx,
      createExamesFisicosDto.adm,
      examesFisicos.id_exames_fisicos,
    );

    const complemento = await this.createComplemento(
      trx,
      createExamesFisicosDto.complemento,
    );

    return { examesFisicos, forcaMuscular, adm, complemento };
  }
}
