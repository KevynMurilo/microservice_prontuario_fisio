import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsBoolean } from 'class-validator';

export class CreateDoencaDto {
  @ApiProperty({ example: true, required: false })
  @IsOptional()
  @IsBoolean()
  dm: boolean;

  @ApiProperty({ example: true, required: false })
  @IsOptional()
  @IsBoolean()
  has: boolean;

  @ApiProperty({ example: 'Outros problemas', required: false })
  @IsOptional()
  @IsString()
  outros?: string;
}
