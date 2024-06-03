import { IsNotEmpty, IsInt, IsOptional } from 'class-validator';

export class CreateProntuarioDto {
  @IsNotEmpty({ message: 'Unidade é obrigatório' })
  unidade: string;

  @IsNotEmpty({ message: 'Setor de atendimento é obrigatório' })
  setor_atendimento: string;

  @IsInt({ message: 'Id do paciente deve ser um número inteiro' })
  @IsNotEmpty({ message: 'Id do paciente é obrigatório' })
  id_paciente: number;

  @IsInt({ message: 'Id do fisioterapeuta deve ser um número inteiro' })
  @IsNotEmpty({ message: 'Id do fisioterapeuta é obrigatório' })
  id_fisioterapeuta: number;

  @IsInt({ message: 'Id do coordenador deve ser um número inteiro' })
  @IsNotEmpty({ message: 'Id do coordenador é obrigatório' })
  id_coordenador: number;

  @IsOptional()
  responsavel?: string;

  @IsOptional()
  caso_emergencia_avisar?: string;

  @IsOptional()
  telefone_emergencia?: string;

  @IsNotEmpty({ message: 'Diagnóstico clínico é obrigatório' })
  diagnostico_clinico: string;

  @IsNotEmpty({ message: 'Médico responsável é obrigatório' })
  medico_responsavel: string;

  @IsNotEmpty({ message: 'Diagnóstico do fisioterapeuta é obrigatório' })
  diagnostico_fisoterapeuta: string;

  @IsOptional()
  antecendentes_familiar?: string;

  @IsOptional()
  patologias_associadas?: string;

  @IsNotEmpty({ message: 'Peso é obrigatório' })
  peso: number;

  @IsNotEmpty({ message: 'Altura é obrigatório' })
  altura: number;

  @IsNotEmpty({ message: 'Estado geral é obrigatório' })
  estado_geral: string;

  @IsNotEmpty({ message: 'Independência de locomoção é obrigatório' })
  independencia_de_locomocao: string;
}
