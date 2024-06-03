import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProntuarioService } from './prontuario.service';
import { CreateProntuarioDto } from './dto/create-prontuario.dto';

@Controller('prontuario')
export class ProntuarioController {
  constructor(private readonly prontuarioService: ProntuarioService) {}

  @Post()
  async create(@Body() createProntuarioDto: CreateProntuarioDto) {
    const prontuario = await this.prontuarioService.create(createProntuarioDto);
    return prontuario;
  }

  @Get()
  async findAll() {
    const prontuarios = await this.prontuarioService.findall();
    return prontuarios;
  }

  @Get(':id')
  async findById(@Param('id') id: number) {
    const prontuario = await this.prontuarioService.findByIdPacient(+id);
    return prontuario;
  }
}
