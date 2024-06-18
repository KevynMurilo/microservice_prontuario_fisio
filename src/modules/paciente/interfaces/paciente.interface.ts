export interface Paciente {
  idPaciente: number;
  nomePaciente: string;
  cpf: string;
  uf: string;
  endereco: string;
  numeroCasa: string;
  dataDeNascimento: Date;
  sexo: string;
  proficao: string;
  diagnosticoClinico: string;
  diagnosticoFisio: string;
  primeiraConsulta: boolean;
  emailPaciente: string;
  tipoUsuario: number;
}
