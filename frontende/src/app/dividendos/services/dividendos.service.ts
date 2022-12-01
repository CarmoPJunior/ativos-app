import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDividendos } from '../models/dividendos.model';
import { first, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DividendosService {

  private readonly API = `http://127.0.0.1:8000/dividendos/ano/`;

  constructor(private httpClient: HttpClient) { }

  getDividendosByAno(ano: number) {

    let urlApi = `${this.API}`;

    if(ano)
      urlApi = `${this.API}?ano=${ano}`;

    return this.httpClient
      .get<IDividendos[]>(urlApi)
      .pipe(
        first(),
        map(dividendos => (
          dividendos.map((item) => {
            return item
          })
        ))
      );
  }
}
