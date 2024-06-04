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

@Injectable()
export class ProntuarioService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly prontuarioRepository: ProntuarioRepository,
    private readonly anamneseService: AnamneseService,
  ) {}

  async create(
    createProntuarioDto: CreateProntuarioDto,
    createAnamneseDto: CreateAnamneseDto,
  ) {
    const verify = await this.prontuarioRepository.verificarPaciente(
      createProntuarioDto.id_paciente,
    );
    if (verify)
      throw new BadRequestException('Paciente já possui um prontuário');

    return this.prisma.$transaction(async (trx: Prisma.TransactionClient) => {
      const prontuario = await this.prontuarioRepository.createProntuario(
        trx,
        createProntuarioDto,
      );

      const anamnese = await this.anamneseService.create(
        trx,
        createAnamneseDto,
        prontuario.id_prontuario,
      );

      return { prontuario, anamnese };
    });
  }

  async findall() {
    const prontuarios = await this.prontuarioRepository.findAll();
    if (prontuarios.length === 0)
      throw new NotFoundException('Prontuário não encontrado');
    return prontuarios;
  }
}
