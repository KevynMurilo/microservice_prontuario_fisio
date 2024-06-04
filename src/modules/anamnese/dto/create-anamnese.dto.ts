import { IsString, IsOptional, IsBoolean } from 'class-validator';

export class CreateAnamneseDto {
  @IsString()
  queixa_principal: string;

  @IsString()
  hma: string;

  @IsString()
  hmp: string;

  @IsString()
  avd: string;

  @IsOptional()
  @IsBoolean()
  realizou: boolean;

  @IsOptional()
  @IsString()
  quais?: string;

  @IsOptional()
  @IsString()
  resultados_exames?: string;

  @IsOptional()
  @IsBoolean()
  dm: boolean;

  @IsOptional()
  @IsBoolean()
  has: boolean;

  @IsOptional()
  @IsString()
  outros?: string;
}
