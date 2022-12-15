import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IVendas } from '../shared/models/vendas.model';
import { first, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VendasService {

  private readonly API = `${environment.config.apiUrl}/vendas`;

  constructor(private httpClient: HttpClient) {
  }

  getVendasByYear(ano: number) {

    let urlApi = `${this.API}/lucro/ano/`;

    if(ano)
      urlApi = `${this.API}/lucro/ano/?ano=${ano}`;

    return this.httpClient
      .get<IVendas[]>(urlApi)
      .pipe(
        first(),
        map(vendas => (
          vendas.map((item) => {
            return item
          })
        ))
      );
  }
}
