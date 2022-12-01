import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAtivo } from '../models/ativo.model';
import { delay, first, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AtivosService {

  // private readonly API = `${environment.API}cursos`;

  private readonly API = `http://localhost:8081/ativos`;

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient
      .get<IAtivo[]>(this.API)
      .pipe(
        first(),
        map(ativos => (
          ativos.map((item) => {
            return this.totalizarValores(item);
          })
        )),
        //delay(5000),
        tap(courses => console.log(courses))
      );
  }

  loadById(id: number) {
    return this.httpClient.get<IAtivo>(`${this.API}/${id}`);
  }

  save(record: Partial<IAtivo>) {
    return this.httpClient.post<IAtivo>(this.API, record).pipe(first());
  }

  totalizarValores(item :IAtivo) : IAtivo{

    let porcentagemVenda = (item.porcentagemVenda / 100);

    item.valorTotal= item.valorCompra * item.qtCompra;
    item.lucroUnitario= (item.valorCompra * porcentagemVenda);
    item.lucroTotal= item.lucroUnitario * item.qtCompra;
    item.valorVenda= item.valorCompra + item.lucroUnitario;

    item.valorAInvestir = item.valorAtualCotacao * item.qtPrevistaCompra;
    item.qtTotalCompraSimulado = item.qtPrevistaCompra + item.qtCompra;
    item.valorTotalSimulado = item.valorTotal + item.valorAInvestir;
    item.valorMedioSimulado = item.valorTotalSimulado / item.qtTotalCompraSimulado;
    item.lucroUnitarioSimulado  = item.valorMedioSimulado * porcentagemVenda;
    item.valorVendaSimulado = item.lucroUnitarioSimulado + item.valorMedioSimulado;
    item.lucroTotalSimulado = item.lucroUnitarioSimulado * item.qtTotalCompraSimulado;

    return item;
  }
}
