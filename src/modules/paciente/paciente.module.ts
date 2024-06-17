import { Module } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { HttpModule } from 'src/common/http/http.module';

@Module({
  imports: [HttpModule],
  providers: [
    PacienteService,
    {
      provide: 'PACIENTE_URL',
      useValue: process.env.PACIENTE_URL,
    },
  ],
  exports: [PacienteService],
})
export class PacienteModule {}
