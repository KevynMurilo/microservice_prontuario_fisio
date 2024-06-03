import { Module } from '@nestjs/common';
import { AnamneseService } from './anamnese.service';
import { AnamneseRepository } from './anamnese.repository';
import { PrismaService } from '../database/prisma.service';
import { CirurgiaModule } from '../cirurgia/cirurgia.module';
import { DoencaConcomitanteModule } from '../doenca_concomitante/doenca-concomitante.module';
import { AnamneseController } from './anamnese.controller';

@Module({
  imports: [CirurgiaModule, DoencaConcomitanteModule],
  controllers: [AnamneseController],
  providers: [AnamneseService, AnamneseRepository, PrismaService],
})
export class AnamneseModule {}
