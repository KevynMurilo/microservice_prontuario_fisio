import { Controller, Post, Body } from '@nestjs/common';
import { AnamneseService } from './anamnese.service';
import { CreateAnamneseDto } from './dto/create-anamnese.dto';

@Controller('anamnese')
export class AnamneseController {
  constructor(private readonly anamneseService: AnamneseService) {}

  @Post()
  async create(@Body() createAnamneseDto: CreateAnamneseDto) {
    return this.anamneseService.create(createAnamneseDto);
  }
}
