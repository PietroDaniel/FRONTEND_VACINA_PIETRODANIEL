import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoasRoutingModule } from './pessoas-routing.module';
import { PessoaListagemComponent } from './pessoa-listagem/pessoa-listagem.component';


@NgModule({
  declarations: [
    PessoaListagemComponent
  ],
  imports: [
    CommonModule,
    PessoasRoutingModule
  ]
})
export class PessoasModule { }
