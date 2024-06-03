import { Module } from '@nestjs/common';
import { PrismaModule } from './modules/database/prisma.module';
import { ProntuarioModule } from './modules/prontuario/prontuario.module';
import { AnamneseModule } from './modules/anamnese/anamnese.module';
import { CirurgiaModule } from './modules/cirurgia/cirurgia.module';
import { DoencaConcomitanteModule } from './modules/doenca_concomitante/doenca-concomitante.module';

@Module({
  imports: [
    PrismaModule,
    ProntuarioModule,
    AnamneseModule,
    CirurgiaModule,
    DoencaConcomitanteModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
