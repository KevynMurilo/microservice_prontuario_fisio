import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsBoolean } from 'class-validator';

export class CreateCirurgiaDto {
  @ApiProperty({ example: true })
  @IsBoolean()
  realizou: boolean;

  @ApiProperty({ example: 'Cirurgia X', required: false })
  @IsOptional()
  @IsString()
  quais?: string;

  @ApiProperty({ example: 'Resultado X', required: false })
  @IsOptional()
  @IsString()
  resultados_exames?: string;
}
