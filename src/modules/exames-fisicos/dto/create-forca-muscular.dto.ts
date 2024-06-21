import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateForcaMuscularDto {
  @ApiProperty({ example: 'Bíceps', required: false })
  @IsOptional()
  @IsString({
    message: 'O campo "musculo" é obrigatório e deve ser uma string.',
  })
  musculo?: string;

  @ApiProperty({ example: 'Braço', required: false })
  @IsOptional({
    message: 'O campo "grupo" é obrigatório e deve ser uma string.',
  })
  grupo?: string;

  @ApiProperty({ example: '5', required: false })
  @IsOptional({
    message: 'O campo "gray" é obrigatório e deve ser uma string.',
  })
  grau?: string;
}
