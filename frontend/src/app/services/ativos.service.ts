import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { IAtivo } from '../shared/models/ativo.model';

@Injectable({
  providedIn: 'root'
})
export class AtivosService {

  private readonly API = `${environment.config.apiUrl}/ativos`;

  constructor(private httpClient: HttpClient) {}

  getAtivosByYear(anos: number[]) {

    let urlApi = `${this.API}/lucro/ano/`;

    if(anos && anos.length >0){
      let queryParameters = anos.join("&anos=");
      urlApi = `${this.API}/lucro/ano/?anos=${queryParameters}`;
    }

    return this.httpClient
      .get<IAtivo[]>(urlApi)
      .pipe(
        first(),
      );
  }
}

  // list() {
  //   return this.httpClient
  //     .get<IAtivo[]>(this.API)
  //     .pipe(
  //       first(),
  //       map(ativos => (
  //         ativos.map((item) => {
  //           return this.totalizarValores(item);
  //         })
  //       )),
  //       //delay(5000),
  //       tap(courses => console.log(courses))
  //     );
  // }

  // totalizarValores(item :IAtivo) : IAtivo{

  //   let porcentagemVenda = (item.porcentagemVenda / 100);

  //   item.valorTotal= item.valorCompra * item.qtCompra;
  //   item.lucroUnitario= (item.valorCompra * porcentagemVenda);
  //   item.lucroTotal= item.lucroUnitario * item.qtCompra;
  //   item.valorVenda= item.valorCompra + item.lucroUnitario;

  //   item.valorAInvestir = item.valorAtualCotacao * item.qtPrevistaCompra;
  //   item.qtTotalCompraSimulado = item.qtPrevistaCompra + item.qtCompra;
  //   item.valorTotalSimulado = item.valorTotal + item.valorAInvestir;
  //   item.valorMedioSimulado = item.valorTotalSimulado / item.qtTotalCompraSimulado;
  //   item.lucroUnitarioSimulado  = item.valorMedioSimulado * porcentagemVenda;
  //   item.valorVendaSimulado = item.lucroUnitarioSimulado + item.valorMedioSimulado;
  //   item.lucroTotalSimulado = item.lucroUnitarioSimulado * item.qtTotalCompraSimulado;

  //   return item;
  // }
