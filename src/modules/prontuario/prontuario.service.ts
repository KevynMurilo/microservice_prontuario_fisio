import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ProntuarioRepository } from './prontuario.repository';
import { CreateProntuarioDto } from './dto/create-prontuario.dto';
import { PrismaService } from '../database/prisma.service';
import { Prisma } from '@prisma/client';
import { AnamneseService } from '../anamnese/anamnese.service';
import { CreateAnamneseDto } from '../anamnese/dto/create-anamnese.dto';
import { ExamesFisicosService } from '../exames_fisicos/exames_fisicos.service';
import { CreateExamesFisicosDto } from '../exames_fisicos/dto/create-exames-fisicos.dto';
import { ObjetivoService } from '../objetivo/objetivo.service';
import { CreateObjetivoDto } from '../objetivo/dto/create-objetivo.dto';
import { CondutasService } from '../condutas/condutas.service';
import { CreateCondutaDto } from '../condutas/dto/create-conduta.dto';

@Injectable()
export class ProntuarioService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly prontuarioRepository: ProntuarioRepository,
    private readonly anamneseService: AnamneseService,
    private readonly examesFisicosService: ExamesFisicosService,
    private readonly objetivosService: ObjetivoService,
    private readonly condutasService: CondutasService,
  ) {}

  private async createProntuario(
    trx: Prisma.TransactionClient,
    createProntuarioDto: CreateProntuarioDto,
  ) {
    return this.prontuarioRepository.createProntuario(trx, createProntuarioDto);
  }

  async createFull(
    createProntuarioDto: CreateProntuarioDto,
    createAnamneseDto: CreateAnamneseDto,
    createExamesFisicosDto: CreateExamesFisicosDto,
    createObjetivoDto: CreateObjetivoDto[],
    createCondutaDto: CreateCondutaDto[],
  ) {
    const verify = await this.prontuarioRepository.getByPaciente(
      createProntuarioDto.id_paciente,
    );
    if (verify)
      throw new BadRequestException('Paciente já possui um prontuário');

    return this.prisma.$transaction(async (trx: Prisma.TransactionClient) => {
      const prontuario = await this.createProntuario(trx, createProntuarioDto);

      const anamnese = await this.anamneseService.createFull(
        trx,
        createAnamneseDto,
      );

      const examesFisicos = await this.examesFisicosService.create(
        trx,
        createExamesFisicosDto,
      );

      const objetivos = await this.objetivosService.create(
        trx,
        createObjetivoDto,
        prontuario.id_prontuario,
      );

      const condutas = await this.condutasService.create(
        trx,
        createCondutaDto,
        prontuario.id_prontuario,
      );

      return { prontuario, anamnese, examesFisicos, objetivos, condutas };
    });
  }

  async findall() {
    const prontuarios = await this.prontuarioRepository.findAll();
    if (prontuarios.length === 0)
      throw new NotFoundException('Nenhum prontuário encontrado');
    return prontuarios;
  }

  async findByPaciente(id: number) {
    const prontuario = await this.prontuarioRepository.getByPaciente(id);
    if (!prontuario) throw new NotFoundException('Prontuário não encontrado');

    return prontuario;
  }
}
