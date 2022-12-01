export interface IAtivo {
  id: number;
  description: string;
  sigla: string;
  qtCompra: number;
  qtPrevistaCompra: number;
  valorCompra: number;
  valorAtualCotacao: number;
  valorDividendos: number;
  porcentagemVenda: number;
  tipoAtivo: string;

  valorTotal: number;
  lucroTotal: number;
  valorAInvestir: number;
  lucroUnitario: number;
  valorVenda: number;

  valorTotalSimulado: number;
  qtTotalCompraSimulado: number;
  valorMedioSimulado: number;
  lucroUnitarioSimulado: number;
  valorVendaSimulado: number;
  lucroTotalSimulado: number;


}
