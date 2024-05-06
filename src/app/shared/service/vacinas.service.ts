import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vacina } from '../model/vacina';

@Injectable({
  providedIn: 'root'
})

export class VacinasService {

  private readonly API = 'http://localhost:8080/Backend_Vacina_PietroDaniel/rest/vacina'

  constructor(private httpClient: HttpClient) { }

  consultarTodas(): Observable<Array<Vacina>> {
    return this.httpClient.get<Array<Vacina>>(this.API + '/todas')
  }

}
