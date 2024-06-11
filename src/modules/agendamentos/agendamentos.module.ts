import { Module } from '@nestjs/common';
import { AgendamentosService } from './agendamentos.service';
import { HttpModule } from 'src/common/http/http.module';

@Module({
  imports: [HttpModule],
  providers: [
    AgendamentosService,
    {
      provide: 'AGENDAMENTOS_URL',
      useValue: process.env.AGENDAMENTO_URL,
    },
  ],
  exports: [AgendamentosService],
})
export class AgendamentosModule {}
