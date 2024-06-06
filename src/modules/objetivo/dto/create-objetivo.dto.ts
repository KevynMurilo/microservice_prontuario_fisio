import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateObjetivoDto {
  @ApiProperty({
    example: 'Reduzir a dor',
    description: 'Descrição do objetivo fisioterapêutico',
  })
  @IsString()
  @IsNotEmpty({
    message: 'A descrição do objetivo fisioterapêutico é obrigatória',
  })
  descricao_objetivo_fisioterapeutico: string;
}
