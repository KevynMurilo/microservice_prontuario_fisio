import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateAdmDto {
  @ApiProperty({ example: 'Flexão', required: false })
  @IsOptional()
  @IsString({
    message: 'O campo "movimento" é obrigatório e deve ser uma string.',
  })
  movimento?: string;

  @ApiProperty({ example: 'true', required: false })
  @IsOptional()
  @IsString({
    message: 'O campo "ativa" é obrigatório e deve ser uma string.',
  })
  ativa?: string;

  @ApiProperty({ example: 'true', required: false })
  @IsOptional()
  @IsString({
    message: 'O campo "passiva" é obrigatório e deve ser uma string.',
  })
  passiva?: string;
}
