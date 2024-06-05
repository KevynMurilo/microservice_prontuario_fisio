import { Injectable } from '@nestjs/common';
import { IsOptional, IsString } from 'class-validator';

@Injectable()
export class CreateAdmDto {
  @IsOptional()
  @IsString({
    message: 'O campo "movimento" é obrigatório e deve ser uma string.',
  })
  movimento?: string;

  @IsOptional()
  @IsString({
    message: 'O campo "ativa" é obrigatório e deve ser uma string.',
  })
  ativa?: string;

  @IsOptional()
  @IsString({
    message: 'O campo "passiva" é obrigatório e deve ser uma string.',
  })
  passiva?: string;
}
