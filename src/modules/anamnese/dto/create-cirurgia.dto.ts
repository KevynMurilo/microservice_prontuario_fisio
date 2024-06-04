import { IsString, IsOptional, IsBoolean } from 'class-validator';

export class CreateCirurgiaDto {
  @IsBoolean()
  realizou: boolean;

  @IsOptional()
  @IsString()
  quais?: string;

  @IsOptional()
  @IsString()
  resultados_exames?: string;
}
