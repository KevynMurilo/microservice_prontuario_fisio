import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { Prisma, Prontuario } from '@prisma/client';

@Injectable()
export class ProntuarioRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getByPaciente(
    id: number,
  ): Promise<Omit<Prontuario, 'created_at' | 'deleted_at'>> {
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
            queixa_principal: true,
            hma: true,
            hmp: true,
            avd: true,
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
    data: Prisma.ProntuarioCreateInput,
  ): Promise<Prontuario> {
    return trx.prontuario.create({
      data: data,
    });
  }

  async findAll(): Promise<
    Array<Omit<Prontuario, 'created_at' | 'deleted_at'>>
  > {
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
            queixa_principal: true,
            hma: true,
            hmp: true,
            avd: true,
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

  async delete(id_paciente: number): Promise<Prontuario> {
    return await this.prisma.prontuario.update({
      where: {
        id_paciente: id_paciente,
      },
      data: {
        deleted_at: new Date(),
      },
    });
  }
}
