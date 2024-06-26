import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { ProntuarioRepository } from './prontuario.repository';
import { CreateProntuarioDto } from './dto/create-prontuario.dto';
import { PrismaService } from '../database/prisma.service';
import { Prisma, Prontuario } from '@prisma/client';
import { AnamneseService } from '../anamnese/anamnese.service';
import { CreateAnamneseDto } from '../anamnese/dto/create-anamnese.dto';
import { ExamesFisicosService } from '../exames-fisicos/exames-fisicos.service';
import { CreateExamesFisicosDto } from '../exames-fisicos/dto/create-exames-fisicos.dto';
import { ObjetivoService } from '../objetivo/objetivo.service';
import { CreateObjetivoDto } from '../objetivo/dto/create-objetivo.dto';
import { CondutasService } from '../condutas/condutas.service';
import { CreateCondutaDto } from '../condutas/dto/create-conduta.dto';
import { Request } from 'express';
import { PacienteService } from '../paciente/paciente.service';
import { VerificarIdAgendamentoService } from 'src/common/utils/verificar-id-agendamento/verificar-id-agendamento.service';

@Injectable()
export class ProntuarioService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly prontuarioRepository: ProntuarioRepository,
    private readonly anamneseService: AnamneseService,
    private readonly examesFisicosService: ExamesFisicosService,
    private readonly objetivosService: ObjetivoService,
    private readonly condutasService: CondutasService,
    private readonly pacienteService: PacienteService,
    private readonly verificarIdAgendamento: VerificarIdAgendamentoService,
  ) {}

  private async createProntuario(
    trx: Prisma.TransactionClient,
    createProntuarioDto: CreateProntuarioDto,
  ): Promise<Prontuario> {
    const verify = await this.prontuarioRepository.getByPaciente(
      createProntuarioDto.id_paciente,
    );
    if (verify)
      throw new BadRequestException('Paciente já possui um prontuário');

    return this.prontuarioRepository.createProntuario(trx, createProntuarioDto);
  }

  async createFull(
    createProntuarioDto: CreateProntuarioDto,
    createAnamneseDto: CreateAnamneseDto,
    createExamesFisicosDto: CreateExamesFisicosDto,
    createObjetivoDto: CreateObjetivoDto[],
    createCondutaDto: CreateCondutaDto[],
    req: Request,
  ) {
    const user = req.user;
    const id_fisioterapeuta = Number(user.UserId);

    await this.pacienteService.getPacienteIdApiAuth(
      createProntuarioDto.id_paciente,
      req.headers.authorization,
    );

    await this.verificarIdAgendamento.verify(
      createProntuarioDto.id_agendamento,
    );

    let transactionResult: { prontuario: Prontuario } | null = null;

    try {
      transactionResult = await this.prisma.$transaction(
        async (trx: Prisma.TransactionClient) => {
          const prontuario = await this.createProntuario(trx, {
            ...createProntuarioDto,
            id_fisioterapeuta: id_fisioterapeuta,
          });

          const anamnese = await this.anamneseService.createFull(
            trx,
            createAnamneseDto,
            prontuario.id_prontuario,
          );

          const examesFisicos = await this.examesFisicosService.create(
            trx,
            createExamesFisicosDto,
            prontuario.id_prontuario,
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

          await this.pacienteService.updatePacientePrimeiraConsulta(
            createProntuarioDto.id_paciente,
            req.headers.authorization,
          );

          return { prontuario, anamnese, examesFisicos, objetivos, condutas };
        },
      );

      return transactionResult;
    } catch (error) {
      if (transactionResult && transactionResult.prontuario) {
        await this.deleteCascade(transactionResult.prontuario.id_prontuario);
      }
      throw new InternalServerErrorException(
        `Erro interno de servidor ${error.message}`,
      );
    }
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

  async deleteParanoid(
    id_paciente: number,
  ): Promise<NotFoundException | { message: string }> {
    const prontuarioExists =
      await this.prontuarioRepository.getByPaciente(id_paciente);
    if (!prontuarioExists)
      throw new NotFoundException('Prontuário não encontrado');

    await this.prontuarioRepository.delete(id_paciente);
    return { message: 'Prontuario deletado com sucesso' };
  }

  private async deleteCascade(id_prontuario: number) {
    await this.prontuarioRepository.deleteCascade(id_prontuario);
    return { message: 'Cascade bem sucedido' };
  }
}
