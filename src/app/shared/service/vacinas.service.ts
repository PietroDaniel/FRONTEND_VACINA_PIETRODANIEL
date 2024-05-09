import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vacina } from '../model/vacina';
import { VacinaSeletor } from '../model/seletor/vacina.seletor';

@Injectable({
  providedIn: 'root'
})

export class VacinasService {

  private readonly API = 'http://localhost:8080/Backend_Vacina_PietroDaniel/rest/vacina'

  constructor(private httpClient: HttpClient) { }

  consultarTodasVacinas(): Observable<Array<Vacina>> {
    return this.httpClient.get<Array<Vacina>>(this.API + '/todas')
  }

  consultarVacinaID(idVacina: number): Observable<Vacina> {
    return this.httpClient.get<Vacina>(this.API + '/consultar/' + idVacina )
  }

  listarComSeletor(seletor: VacinaSeletor) : Observable<Array<Vacina>> {
    return this.httpClient.post<Array<Vacina>>(this.API + '/filtro', seletor)
  }

  excluir (vacinaId: number): Observable<boolean> {
    return this.httpClient.delete<boolean>(this.API + '/excluir/' + vacinaId)
  }

  salvar(novaVacina: Vacina): Observable<Vacina> {
    return this.httpClient.post<Vacina>(this.API + '', novaVacina)
  }

  editar(vacinaEditada: Vacina): Observable<boolean>{
    return this.httpClient.put<boolean>(this.API + '/alterar', vacinaEditada)
  }

}
