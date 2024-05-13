import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../shared/model/pessoa';
import { PessoasService } from '../../shared/service/pessoas.service';
import Swal from 'sweetalert2';
import { Pais } from '../../shared/model/pais';
import { PaisService } from '../../shared/service/pais.service';
import { VacinasService } from '../../shared/service/vacinas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pessoa-listagem',
  templateUrl: './pessoa-listagem.component.html',
  styleUrl: './pessoa-listagem.component.scss'
})
export class PessoaListagemComponent implements OnInit {
  public pessoa: Pessoa = new Pessoa();
  public paises: Array<Pais> = [];
  public idPessoa: number;
  public pessoas: Pessoa[] = [];

  constructor(
    private PessoasService: PessoasService,
    private paisService: PaisService,
    private VacinasService: VacinasService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listarTodasAsPessoas();
  }

  public voltar(): void {
    this.router.navigate(['/pessoas/']);
  }


  editarPessoa() {
   ;
    }

  private salvarNovaPessoa(): void {
    this.PessoasService.salvar(this.pessoa).subscribe(
      (resultado) => {
        this.pessoas = resultado;
        Swal.fire({
          icon: 'success',
          text: 'Pessoa salva com sucesso!'
        });
        this.voltar();
      },
      (erro) => {
        Swal.fire({
          icon: 'error',
          text: 'Erro ao salvar nova pessoa' + erro.error.mensagem,
        });
        console.error('Erro ao salvar nova pessoa.');
      }
    );
  }

  salvarPessoa(): void {
    if (this.idPessoa) {
      this.editarPessoa();
    } else {
      this.salvarNovaPessoa();
    }
  }


  private listarTodasAsPessoas() {
    this.PessoasService.listarTodasAsPessoas().subscribe(
      resultado => {
        this.pessoas = resultado;
      },
      erro => {
        console.error('Erro ao consultar pessoas', erro);
      }
    );
  }


}

