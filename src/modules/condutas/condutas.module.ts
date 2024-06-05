import { Module } from '@nestjs/common';
import { CondutasService } from './condutas.service';
import { CondutasRepository } from './condutas.repository';

@Module({
  controllers: [],
  providers: [CondutasService, CondutasRepository],
  exports: [CondutasService],
})
export class CondutasModule {}
