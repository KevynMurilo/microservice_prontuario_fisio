import { Module } from '@nestjs/common';
import { ExamesFisicosService } from './exames_fisicos.service';
import { ExamesFisicosRepository } from './exames-fisicos.repository';

@Module({
  imports: [],
  providers: [ExamesFisicosService, ExamesFisicosRepository],
  exports: [ExamesFisicosService],
})
export class ExamesFisicosModule {}
