import { Module } from '@nestjs/common';
import { PrismaModule } from './modules/database/prisma.module';
import { ProntuarioModule } from './modules/prontuario/prontuario.module';
import { AnamneseModule } from './modules/anamnese/anamnese.module';
import { ExamesFisicosModule } from './modules/exames_fisicos/exames_fisicos.module';
import { ObjetivoModule } from './modules/objetivo/objetivo.module';
import { CondutasModule } from './modules/condutas/condutas.module';

@Module({
  imports: [
    PrismaModule,
    ProntuarioModule,
    AnamneseModule,
    ExamesFisicosModule,
    ObjetivoModule,
    CondutasModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
