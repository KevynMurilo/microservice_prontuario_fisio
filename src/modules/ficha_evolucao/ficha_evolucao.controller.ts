import { Controller, Post, Body } from '@nestjs/common';
import { FichaEvolucaoService } from './ficha_evolucao.service';
import { CreateFichaEvolucaoDto } from './dto/create-ficha_evolucao.dto';

@Controller('fichaEvolucao')
export class FichaEvolucaoController {
  constructor(private readonly fichaEvolucaoService: FichaEvolucaoService) {}

  @Post()
  create(@Body() createFichaEvolucaoDto: CreateFichaEvolucaoDto) {
    return this.fichaEvolucaoService.create(createFichaEvolucaoDto);
  }
}
