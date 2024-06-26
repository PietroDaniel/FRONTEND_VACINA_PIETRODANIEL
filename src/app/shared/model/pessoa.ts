import { Vacina } from "./vacina";
import { Pais } from "./pais";

export class Pessoa {
  id: number;
  nome: string;
  cpf: number;
  sexo: string;
  dataNascimento: Date;
  paisOrigem: Pais;
  tipo: string;
  vacinacoes: Array<Vacina>;
}

