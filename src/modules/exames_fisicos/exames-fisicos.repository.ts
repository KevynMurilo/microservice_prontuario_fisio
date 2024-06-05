import { PrismaService } from '../database/prisma.service';
import { CreateExamesFisicosDto } from './dto/create-exames-fisicos.dto';
import { Prisma } from '@prisma/client';
import { CreateForcaMuscularDto } from './dto/create-forca-muscular.dto';
import { CreateAdmDto } from './dto/create-adm.dto';
import { CreateComplementoDto } from './dto/create-complemento.dto';

export class ExamesFisicosRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createExamesFisicos(
    trx: Prisma.TransactionClient,
    createExamesFisicosDto: CreateExamesFisicosDto,
    id_prontuario: number,
  ) {
    return trx.exame_Fisico.create({
      data: {
        id_prontuario,
        pa: createExamesFisicosDto.pa,
        fc: createExamesFisicosDto.fc,
        fr: createExamesFisicosDto.fr,
        ap: createExamesFisicosDto.ap,
        spo2: createExamesFisicosDto.spo2,
        temp: createExamesFisicosDto.temp,
        exames_especificos: createExamesFisicosDto.exames_especificos,
        tonus_muscular: createExamesFisicosDto.tonus_muscular,
        tipo_tonus: createExamesFisicosDto.tipo_tonus,
        grau_tonus: createExamesFisicosDto.grau_tonus,
        local_tonus: createExamesFisicosDto.local_tonus,
        distrubuicao_topografica:
          createExamesFisicosDto.distribuicao_topografica,
        percepcao: createExamesFisicosDto.percepcao,
        coordenacao_dinamica_e_estatica:
          createExamesFisicosDto.coordenacao_dinamica_e_estatica,
        triciptal: createExamesFisicosDto.triciptal,
        biciptal: createExamesFisicosDto.biciptal,
        radial: createExamesFisicosDto.radial,
        patelar: createExamesFisicosDto.patelar,
        calcanear: createExamesFisicosDto.calcanear,
        cutaneo_abdominal: createExamesFisicosDto.cutaneo_abdominal,
        cutaneo_plantar: createExamesFisicosDto.cutaneo_plantar,
        contraturas_deformidades:
          createExamesFisicosDto.contraturas_deformidades,
        ulceras: createExamesFisicosDto.ulceras,
        local_ulceras: createExamesFisicosDto.local_ulceras,
        deambula: createExamesFisicosDto.deambula,
        descricao_deambula: createExamesFisicosDto.descricao_deambula,
        inspecao: createExamesFisicosDto.inspecao,
        palpacao: createExamesFisicosDto.palpacao,
        mensuracao: createExamesFisicosDto.mensuracao,
      },
    });
  }

  async createForcaMuscular(
    trx: Prisma.TransactionClient,
    createForcaMuscularDto: CreateForcaMuscularDto,
    id_exames_fisicos: number,
  ) {
    return trx.forca_muscular.create({
      data: {
        id_exames_fisicos,
        musculo: createForcaMuscularDto.musculo,
        grupo: createForcaMuscularDto.grupo,
        grau: createForcaMuscularDto.grau,
      },
    });
  }

  async createAdm(
    trx: Prisma.TransactionClient,
    createAdmDto: CreateAdmDto,
    id_exames_fisicos: number,
  ) {
    return trx.adm.create({
      data: {
        id_exames_fisicos,
        movimento: createAdmDto.movimento,
        ativa: createAdmDto.ativa,
        passiva: createAdmDto.passiva,
      },
    });
  }

  async createComplemento(
    trx: Prisma.TransactionClient,
    createComplementoDto: CreateComplementoDto,
    id_exames_fisicos: number,
  ) {
    return trx.complemento.create({
      data: {
        id_exames_fisicos,
        sensibilidade: createComplementoDto.sensibilidade,
        dor: createComplementoDto.dor,
        clonus: createComplementoDto.clonus,
        reflexo_ou_reacoes: createComplementoDto.reflexo_ou_reacoes,
        ausculta_cardiaca: createComplementoDto.ausculta_cardiaca,
        testes_especiais: createComplementoDto.testes_especiais,
        avaliacao_funcional: createComplementoDto.avaliacao_funcional,
        observacoes: createComplementoDto.observacoes,
        exames_complementares_ou_laudos:
          createComplementoDto.exames_complementares_ou_laudos,
      },
    });
  }
}
