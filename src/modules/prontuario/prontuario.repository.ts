import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { Prisma } from '@prisma/client';
import { CreateProntuarioDto } from './dto/create-prontuario.dto';

@Injectable()
export class ProntuarioRepository {
  constructor(private readonly prisma: PrismaService) {}

  async verificarPaciente(id: number) {
    return await this.prisma.prontuario.findFirst({
      where: {
        id_paciente: id,
        deleted_at: null,
      },
    });
  }

  async createProntuario(
    trx: Prisma.TransactionClient,
    createProntuarioDto: CreateProntuarioDto,
  ) {
    return trx.prontuario.create({
      data: {
        id_paciente: createProntuarioDto.id_paciente,
        id_fisioterapeuta: createProntuarioDto.id_fisioterapeuta,
        id_coordenador: createProntuarioDto.id_coordenador,
        unidade: createProntuarioDto.unidade,
        setor_atendimento: createProntuarioDto.setor_atendimento,
        responsavel: createProntuarioDto.responsavel,
        caso_emergencia_avisar: createProntuarioDto.caso_emergencia_avisar,
        telefone_emergencia: createProntuarioDto.telefone_emergencia,
        diagnostico_clinico: createProntuarioDto.diagnostico_clinico,
        medico_responsavel: createProntuarioDto.medico_responsavel,
        diagnostico_fisoterapeuta:
          createProntuarioDto.diagnostico_fisoterapeuta,
        antecendentes_familiar: createProntuarioDto.antecendentes_familiar,
        patologias_associadas: createProntuarioDto.patologias_associadas,
        peso: createProntuarioDto.peso,
        altura: createProntuarioDto.altura,
        estado_geral: createProntuarioDto.estado_geral,
        independencia_de_locomocao:
          createProntuarioDto.independencia_de_locomocao,
      },
    });
  }

  async findAll() {
    return await this.prisma.prontuario.findMany({
      include: {
        anamnese: {
          include: {
            cirurgia: true,
            doencas_concomitantes: true,
          },
        },
        exampes_fisicos: {
          include: {
            adm: true,
            forca_muscular: true,
            complementos: true,
          },
        },
        objetivo: true,
        conduta: true,
      },
    });
  }
}
