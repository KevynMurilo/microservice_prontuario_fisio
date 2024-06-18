import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { Prisma } from '@prisma/client';
import { CreateProntuarioDto } from './dto/create-prontuario.dto';

@Injectable()
export class ProntuarioRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getByAgendamento(id: number) {
    return await this.prisma.prontuario.findUnique({
      where: {
        id_agendamento: id,
        deleted_at: null,
      },
    });
  }

  async getByPaciente(id: number) {
    return await this.prisma.prontuario.findUnique({
      where: {
        id_paciente: id,
        deleted_at: null,
      },
      select: {
        id_prontuario: true,
        id_agendamento: true,
        id_paciente: true,
        id_fisioterapeuta: true,
        unidade: true,
        setor_atendimento: true,
        data: true,
        responsavel: true,
        caso_emergencia_avisar: true,
        telefone_emergencia: true,
        diagnostico_clinico: true,
        medico_responsavel: true,
        diagnostico_fisoterapeuta: true,
        antecendentes_familiar: true,
        patologias_associadas: true,
        peso: true,
        altura: true,
        estado_geral: true,
        independencia_de_locomocao: true,
        anamnese: {
          select: {
            cirurgia: {
              select: {
                realizou: true,
                quais: true,
                resultados_exames: true,
              },
            },
            doencas_concomitantes: {
              select: {
                dm: true,
                has: true,
                outros: true,
              },
            },
          },
        },
        exampes_fisicos: {
          select: {
            pa: true,
            fc: true,
            fr: true,
            ap: true,
            spo2: true,
            temp: true,
            exames_especificos: true,
            tonus_muscular: true,
            tipo_tonus: true,
            grau_tonus: true,
            local_tonus: true,
            distrubuicao_topografica: true,
            percepcao: true,
            coordenacao_dinamica_e_estatica: true,
            triciptal: true,
            biciptal: true,
            radial: true,
            patelar: true,
            calcanear: true,
            cutaneo_abdominal: true,
            cutaneo_plantar: true,
            contraturas_deformidades: true,
            ulceras: true,
            local_ulceras: true,
            deambula: true,
            descricao_deambula: true,
            inspecao: true,
            palpacao: true,
            mensuracao: true,
            adm: {
              select: {
                movimento: true,
                ativa: true,
                passiva: true,
              },
            },
            forca_muscular: {
              select: {
                musculo: true,
                grupo: true,
                grau: true,
              },
            },
            complementos: {
              select: {
                sensibilidade: true,
                dor: true,
                clonus: true,
                reflexo_ou_reacoes: true,
                ausculta_cardiaca: true,
                testes_especiais: true,
                avaliacao_funcional: true,
                observacoes: true,
                exames_complementares_ou_laudos: true,
              },
            },
          },
        },
        objetivo: {
          select: {
            descricao_objetivo_fisioterapeutico: true,
          },
        },
        conduta: {
          select: {
            descricao_conduta_fisioterapeutica: true,
          },
        },
      },
    });
  }

  async createProntuario(
    trx: Prisma.TransactionClient,
    createProntuarioDto: CreateProntuarioDto,
  ) {
    return trx.prontuario.create({
      data: {
        id_agendamento: createProntuarioDto.id_agendamento,
        id_paciente: createProntuarioDto.id_paciente,
        id_fisioterapeuta: createProntuarioDto.id_fisioterapeuta,
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
      select: {
        id_prontuario: true,
        id_agendamento: true,
        id_paciente: true,
        id_fisioterapeuta: true,
        unidade: true,
        setor_atendimento: true,
        data: true,
        responsavel: true,
        caso_emergencia_avisar: true,
        telefone_emergencia: true,
        diagnostico_clinico: true,
        medico_responsavel: true,
        diagnostico_fisoterapeuta: true,
        antecendentes_familiar: true,
        patologias_associadas: true,
        peso: true,
        altura: true,
        estado_geral: true,
        independencia_de_locomocao: true,
      },
    });
  }

  async findAll() {
    return await this.prisma.prontuario.findMany({
      where: {
        deleted_at: null,
      },
      select: {
        id_prontuario: true,
        id_agendamento: true,
        id_paciente: true,
        id_fisioterapeuta: true,
        unidade: true,
        setor_atendimento: true,
        data: true,
        responsavel: true,
        caso_emergencia_avisar: true,
        telefone_emergencia: true,
        diagnostico_clinico: true,
        medico_responsavel: true,
        diagnostico_fisoterapeuta: true,
        antecendentes_familiar: true,
        patologias_associadas: true,
        peso: true,
        altura: true,
        estado_geral: true,
        independencia_de_locomocao: true,
        anamnese: {
          select: {
            cirurgia: {
              select: {
                realizou: true,
                quais: true,
                resultados_exames: true,
              },
            },
            doencas_concomitantes: {
              select: {
                dm: true,
                has: true,
                outros: true,
              },
            },
          },
        },
        exampes_fisicos: {
          select: {
            pa: true,
            fc: true,
            fr: true,
            ap: true,
            spo2: true,
            temp: true,
            exames_especificos: true,
            tonus_muscular: true,
            tipo_tonus: true,
            grau_tonus: true,
            local_tonus: true,
            distrubuicao_topografica: true,
            percepcao: true,
            coordenacao_dinamica_e_estatica: true,
            triciptal: true,
            biciptal: true,
            radial: true,
            patelar: true,
            calcanear: true,
            cutaneo_abdominal: true,
            cutaneo_plantar: true,
            contraturas_deformidades: true,
            ulceras: true,
            local_ulceras: true,
            deambula: true,
            descricao_deambula: true,
            inspecao: true,
            palpacao: true,
            mensuracao: true,
            adm: {
              select: {
                movimento: true,
                ativa: true,
                passiva: true,
              },
            },
            forca_muscular: {
              select: {
                musculo: true,
                grupo: true,
                grau: true,
              },
            },
            complementos: {
              select: {
                sensibilidade: true,
                dor: true,
                clonus: true,
                reflexo_ou_reacoes: true,
                ausculta_cardiaca: true,
                testes_especiais: true,
                avaliacao_funcional: true,
                observacoes: true,
                exames_complementares_ou_laudos: true,
              },
            },
          },
        },
        objetivo: {
          select: {
            descricao_objetivo_fisioterapeutico: true,
          },
        },
        conduta: {
          select: {
            descricao_conduta_fisioterapeutica: true,
          },
        },
      },
    });
  }

  async delete(id_paciente: number) {
    const prontuario = await this.prisma.prontuario.update({
      where: {
        id_paciente: id_paciente,
      },
      data: {
        deleted_at: new Date(),
      },
    });
    return prontuario;
  }
}
