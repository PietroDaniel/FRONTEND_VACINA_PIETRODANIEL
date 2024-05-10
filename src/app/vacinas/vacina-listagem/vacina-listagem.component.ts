import { Component, OnInit } from '@angular/core';
import { Vacina } from '../../shared/model/vacina';
import { VacinasService } from '../../shared/service/vacinas.service';
import { VacinaSeletor } from '../../shared/model/seletor/vacina.seletor';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vacina-listagem',
  templateUrl: './vacina-listagem.component.html',
  styleUrl: './vacina-listagem.component.scss'
})
export class VacinaListagemComponent implements OnInit {
  public vacinas: Vacina[] = [];
  public seletor: VacinaSeletor = new VacinaSeletor();

  constructor(
    private vacinasService: VacinasService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.consultarTodas();
  }

  private consultarTodas() {
    this.vacinasService.consultarTodasVacinas().subscribe(
      resultado => {
        this.vacinas = resultado;
      },
      erro => {
        console.error('Erro ao consultar vacinas', erro);
      }
    );
  }

  public pesquisar() {
    this.vacinasService.listarComSeletor(this.seletor).subscribe(
      resultado => {
        this.vacinas = resultado;
      },
      erro => {
        console.error('Erro ao consultar vacinas', erro);
      }
    );
  }

  public limpar() {
    this.consultarTodas();
  }

  public excluir(vacinaSelecionada: Vacina) {
    Swal.fire({
      title: 'Deseja realmente excluir esta vacina?',
      text: 'Essa ação não poderá ser desfeita!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, excluir!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.vacinasService.excluir(vacinaSelecionada.id).subscribe(
          resultado => {
            this.pesquisar();
          },
          erro => {
            Swal.fire('Erro!', 'Erro ao excluir vacina: ' + erro.error.mensagem, 'error');
          }
        );
      }
    });
  }

  public editarVacina(idVacinaSelecionada: number) {
    this.router.navigate(['/vacinas/detalhe', idVacinaSelecionada]);
  }
}
