import { Component, OnInit } from '@angular/core';
import { Vacina } from '../../shared/model/vacina';
import { VacinasService } from '../../shared/service/vacinas.service';
import { VacinaSeletor } from '../../shared/model/seletor/vacina.seletor';

@Component({
  selector: 'app-vacina-listagem',
  templateUrl: './vacina-listagem.component.html',
  styleUrl: './vacina-listagem.component.scss'
})
export class VacinaListagemComponent implements OnInit {

  pesquisar() {
    this.VacinasService.listarComSeletor(this.seletor).subscribe(
      resultado => {
        this.vacinas = resultado;
      },
      erro => {
        console.error('Erro ao consultar cartas', erro);
      }
    )
  }


  public limpar() {
    this.consultarTodas();
  }

  public vacinas: Vacina[] = [];
  public seletor: VacinaSeletor = new VacinaSeletor();

  constructor(private VacinasService: VacinasService) { }

  ngOnInit(): void {
    this.consultarTodas();
  }

  private consultarTodas() {
    this.VacinasService.consultarTodasVacinas().subscribe(
      resultado => {
        this.vacinas = resultado;
      },
      erro => {
        console.error('Erro ao consultar vacinas', erro);
      }
    );
  }


}
