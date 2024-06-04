import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateCirurgiaDto } from './create-cirurgia.dto';
import { CreateDoencaDto } from './create-doenca.dto';

export class CreateAnamneseDto {
  @IsString()
  queixa_principal: string;

  @IsString()
  hma: string;

  @IsString()
  hmp: string;

  @IsString()
  avd: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateCirurgiaDto)
  @ArrayMinSize(1)
  cirurgias: CreateCirurgiaDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateDoencaDto)
  @ArrayMinSize(1)
  doencas_concomitantes: CreateDoencaDto[];
}
