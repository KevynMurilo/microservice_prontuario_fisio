import { Module } from '@nestjs/common';
import { AnamneseService } from './anamnese.service';
import { AnamneseRepository } from './anamnese.repository';

@Module({
  imports: [],
  providers: [AnamneseService, AnamneseRepository],
  exports: [AnamneseService],
})
export class AnamneseModule {}
