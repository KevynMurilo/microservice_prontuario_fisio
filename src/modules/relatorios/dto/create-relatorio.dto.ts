import { IsInt, IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRelatorioDto {
  @ApiProperty({
    description: 'ID do paciente',
    example: 1,
    type: Number,
  })
  @IsInt({ message: 'O id_paciente deve ser um número inteiro.' })
  @IsNotEmpty({ message: 'O id_paciente não pode estar vazio.' })
  id_paciente: number;

  @ApiProperty({
    description: 'ID do fisioterapeuta',
    example: 2,
    type: Number,
  })
  @IsInt({ message: 'O id_fisioterapeuta deve ser um número inteiro.' })
  @IsNotEmpty({ message: 'O id_fisioterapeuta não pode estar vazio.' })
  id_fisioterapeuta: number;

  @ApiProperty({
    description: 'Descrição do relatório',
    example: 'Descrição detalhada do relatório do paciente.',
    type: String,
  })
  @IsString({ message: 'A descricao deve ser uma string.' })
  @IsNotEmpty({ message: 'A descricao não pode estar vazia.' })
  descricao: string;
}
