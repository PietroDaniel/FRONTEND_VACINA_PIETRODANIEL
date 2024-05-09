import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vacinacao } from '../model/vacinacao';

@Injectable({
  providedIn: 'root'
})
export class VacinacaoService {

  private readonly API = 'http://localhost:8080/Backend_Vacina_PietroDaniel/rest/vacinacao'

  constructor(private httpClient: HttpClient) { }

  consultarTodasVacinacoes(): Observable<Array<Vacinacao>> {
    return this.httpClient.get<Array<Vacinacao>>(this.API + '/todas')
  }
}
