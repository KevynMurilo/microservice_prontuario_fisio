import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { PrismaModule } from './modules/database/prisma.module';
import { ProntuarioModule } from './modules/prontuario/prontuario.module';
import { AnamneseModule } from './modules/anamnese/anamnese.module';
import { ExamesFisicosModule } from './modules/exames_fisicos/exames_fisicos.module';
import { ObjetivoModule } from './modules/objetivo/objetivo.module';
import { CondutasModule } from './modules/condutas/condutas.module';
import { RelatoriosModule } from './modules/relatorios/relatorios.module';
import { FichaEvolucaoModule } from './modules/ficha_evolucao/ficha_evolucao.module';
import { PacienteModule } from './modules/paciente/paciente.module';
import { JwtModule } from './common/jwt/jwt.module';
import { RoleMiddleware } from './middlewares/role.middleware';
import { VerificarIdAgendamentoModule } from './common/utils/verificar-id-agendamento/verificar-id-agendamento.module';

@Module({
  imports: [
    PrismaModule,
    ProntuarioModule,
    AnamneseModule,
    ExamesFisicosModule,
    ObjetivoModule,
    CondutasModule,
    RelatoriosModule,
    FichaEvolucaoModule,
    PacienteModule,
    JwtModule,
    VerificarIdAgendamentoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(RoleMiddleware)
      .forRoutes(
        { path: 'relatorios', method: RequestMethod.ALL },
        { path: 'fichaEvolucao', method: RequestMethod.ALL },
        { path: 'prontuario', method: RequestMethod.ALL },
      );
  }
}
