export interface Agendamento {
  id: number;
  pedido_medico: string;
  primeira_consulta: boolean;
  data_agendamento: Date | null;
  status: string;
  idPaciente: number;
  idFisioterapeuta: number | null;
  idCoordenador: number | null;
  motivo_cancelamento: string | null;
}
