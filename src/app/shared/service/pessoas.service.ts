import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from '../model/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {
  private readonly API = 'http://localhost:8080/Backend_Vacina_PietroDaniel/rest/pessoa'

  constructor(private httpClient: HttpClient) { }

  salvar(novaPessoa: Pessoa): Observable<any> {
    return this.httpClient.post(this.API, novaPessoa)
  }

  atualizar(pessoaEditada: Pessoa): Observable<any>{
    return this.httpClient.put(this.API, pessoaEditada)
  }

  excluir (pessoaId: number): Observable<boolean> {
    return this.httpClient.delete<boolean>(this.API + '/' + pessoaId)
  }

  consultarPessoaId(idPessoa: number): Observable<Pessoa> {
    return this.httpClient.get<Pessoa>(this.API + '/' + idPessoa)
  }
  
  listarTodasAsPessoas(): Observable<Array<Pessoa>>{
    return this.httpClient.get<Array<Pessoa>>(this.API + '/todas');
  }

  consultarPesquisadores(): Observable<Array<Pessoa>>{
    return this.httpClient.get<Array<Pessoa>>(this.API + '/pesquisadores');
  }

}
