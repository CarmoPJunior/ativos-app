import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDividendos } from '../shared/models/dividendos.model';
import { first, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DividendosService {

  private readonly API = `${environment.config.apiUrl}/dividendos`;

  constructor(private httpClient: HttpClient) {
  }

  getDividendosByAno(ano: number) {

    let urlApi = `${this.API}/ano/`;

    if(ano)
      urlApi = `${this.API}/ano/?ano=${ano}`;

    return this.httpClient
      .get<IDividendos[]>(urlApi)
      .pipe(
        first(),
      );
  }
}
