import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCondutaDto {
  @ApiProperty({
    example: 'Realizar exercícios de fortalecimento',
    description: 'Descrição da conduta fisioterapêutica',
  })
  @IsString()
  @IsNotEmpty({
    message: 'A descrição da conduta fisioterapêutica é obrigatória',
  })
  descricao_conduta_fisioterapeutica: string;
}
