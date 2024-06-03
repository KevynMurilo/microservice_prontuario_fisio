import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { AnamneseRepository } from './anamnese.repository';
import { PrismaService } from '../database/prisma.service';
import { CirurgiaService } from '../cirurgia/cirurgia.service';
import { DoencaConcomitanteService } from '../doenca_concomitante/doenca-concomitante.service';
import { CreateAnamneseDto } from './dto/create-anamnese.dto';

@Injectable()
export class AnamneseService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly anamneseRepository: AnamneseRepository,
    private readonly cirurgiaService: CirurgiaService,
    private readonly doencaConcomitanteService: DoencaConcomitanteService,
  ) {}

  async create(createAnamneseDto: CreateAnamneseDto) {
    const { cirurgia, doencas_concomitantes } = createAnamneseDto;

    const prontuario = await this.prisma.prontuario.findUnique({
      where: { id_prontuario: createAnamneseDto.id_prontuario },
    });

    if (!prontuario) {
      throw new NotFoundException('Prontuário não encontrado');
    }

    const existingAnamnese = await this.prisma.anamnese.findUnique({
      where: { id_prontuario: createAnamneseDto.id_prontuario },
    });

    if (existingAnamnese) {
      throw new ConflictException(
        'Já existe uma anamnese associada a este prontuário',
      );
    }

    return this.prisma.$transaction(async (prisma) => {
      const anamnese = await this.anamneseRepository.create(
        {
          prontuario: {
            connect: { id_prontuario: createAnamneseDto.id_prontuario },
          },
          queixa_principal: createAnamneseDto.queixa_principal,
          hma: createAnamneseDto.hma,
          hmp: createAnamneseDto.hmp,
          avd: createAnamneseDto.avd,
        },
        prisma,
      );

      if (cirurgia && cirurgia.realizou) {
        await this.cirurgiaService.create(
          {
            ...cirurgia,
            id_anamnese: anamnese.id_anamnese,
          },
          prisma,
        );
      }

      for (const doencaConcomitante of doencas_concomitantes) {
        await this.doencaConcomitanteService.create(
          { ...doencaConcomitante, id_anamnese: anamnese.id_anamnese },
          prisma,
        );
      }

      return anamnese;
    });
  }
}
