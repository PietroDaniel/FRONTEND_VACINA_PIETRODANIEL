import { Component, OnInit } from '@angular/core';
import { Vacina } from '../../shared/model/vacina';
import { Pais } from '../../shared/model/pais';
import { Pessoa } from '../../shared/model/pessoa';
import { VacinasService } from '../../shared/service/vacinas.service';
import { PaisService } from '../../shared/service/pais.service';
import { PessoasService } from '../../shared/service/pessoas.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vacina-detalhe',
  templateUrl: './vacina-detalhe.component.html',
  styleUrl: './vacina-detalhe.component.scss'
})

export class VacinaDetalheComponent implements OnInit {
  public vacina: Vacina = new Vacina();
  public paises: Array<Pais> = [];
  public pesquisadores: Array<Pessoa> = [];
  public idVacina: number;

  constructor(
    private vacinasService: VacinasService,
    private paisService: PaisService,
    private pessoaService: PessoasService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.consultarTodosPaises();
    this.consultarPesquisadores();
    this.route.params.subscribe((params) => {
      this.idVacina = params['id'];
      if (this.idVacina) {
        this.consultarVacinaId();
      }
    });
  }

  public salvar(): void {
    if (this.idVacina) {
      this.editarVacina();
    } else {
      this.salvarNovaVacina();
    }
  }

  private salvarNovaVacina(): void {
    this.vacinasService.salvar(this.vacina).subscribe(
      (resultado) => {
        this.vacina = resultado;
        Swal.fire({
          icon: 'success',
          text: 'Vacina salva com sucesso!',
        });
        this.voltar();
      },
      (erro) => {
        Swal.fire({
          icon: 'error',
          text: 'Erro ao salvar nova vacina: ' + erro.error.mensagem,
        });
        console.error('Erro ao salvar nova vacina.');
      }
    );
  }

  private editarVacina(): void {
    this.vacinasService.editar(this.vacina).subscribe(
      (resposta) => {
        Swal.fire('Vacina atualizada com sucesso!', '', 'success');
        this.voltar();
      },
      (erro) => {
        Swal.fire('Erro ao atualizar vacina: ' + erro.error.mensagem, 'error');
      }
    );
  }

  public consultarVacinaId(): void {
    this.vacinasService.consultarVacinaID(this.idVacina).subscribe(
      (vacina) => {
        this.vacina = vacina;
      },
      (erro) => {
        Swal.fire(
          'Erro ao editar vacina ' + this.vacina.nome + '.',
          erro,
          'error'
        );
      }
    );
  }

  public consultarTodosPaises(): void {
    this.paisService.consultarTodosPaises().subscribe(
      (resultado) => {
        this.paises = resultado;
      },
      (erro) => {
        console.error('Erro ao consultar todos os países.');
      }
    );
  }

  public consultarPesquisadores(): void {
    this.pessoaService.consultarPesquisadores().subscribe(
      (resultado) => {
        this.pesquisadores = resultado;
      },
      (erro) => {
        console.error('Erro ao consultar todos os pesquisadores.');
      }
    );
  }

  public voltar(): void {
    this.router.navigate(['/vacina/']);
  }

  public compareById(r1: any, r2: any): boolean {
    return r1 && r2 ? r1.id === r2.id : r1 === r2;
  }
}
