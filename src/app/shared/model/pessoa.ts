import { Data } from "@angular/router";
import { Vacina } from "./vacina";
import { Pais } from "./pais";

export interface Pessoa {
  id: number;
  nome: string;
  cpf: number;
  sexo: string;
  dataNascimento: Data;
  pais: Pais;
  tipo: string;
  vacinacoes: Array<Vacina>;
}

