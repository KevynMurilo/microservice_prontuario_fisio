import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProntuarioService } from './prontuario.service';

@Controller('prontuario')
export class ProntuarioController {
  constructor(private readonly prontuarioService: ProntuarioService) {}

  @Post()
  async create(@Body() data: any) {
    const prontuario = await this.prontuarioService.create(
      data.createProntuarioDto,
      data.createAnamneseDto,
    );
    return prontuario;
  }

  @Get()
  async findAll() {
    const prontuarios = await this.prontuarioService.findall();
    return prontuarios;
  }
}
