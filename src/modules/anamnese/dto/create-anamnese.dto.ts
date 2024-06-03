import {
  IsNotEmpty,
  IsNumber,
  ValidateNested,
  IsArray,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateCirurgiaDto } from 'src/modules/cirurgia/dto/create-cirurgia.dto';
import { CreateDoencaConcomitanteDto } from '../../doenca_concomitante/dto/create-doenca-concomitante.dto';

export class CreateAnamneseDto {
  @IsNumber()
  @IsNotEmpty({ message: 'Id do prontuário é obrigatório' })
  id_prontuario: number;

  @IsNotEmpty({ message: 'Queixa principal é obrigatório' })
  queixa_principal: string;

  @IsNotEmpty({ message: 'HMA é obrigatório' })
  hma: string;

  @IsNotEmpty({ message: 'HMP é obrigatório' })
  hmp: string;

  @IsNotEmpty({ message: 'AVD é obrigatório' })
  avd: string;

  @ValidateNested()
  @Type(() => CreateCirurgiaDto)
  @IsOptional()
  cirurgia?: CreateCirurgiaDto;

  @ValidateNested({ each: true })
  @Type(() => CreateDoencaConcomitanteDto)
  @IsArray()
  @IsNotEmpty({ message: 'Doenças concomitantes são obrigatórias' })
  doencas_concomitantes: CreateDoencaConcomitanteDto[];
}
