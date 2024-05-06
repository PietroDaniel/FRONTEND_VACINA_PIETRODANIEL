import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacinasRoutingModule } from './vacinas-routing.module';
import { VacinaListagemComponent } from './vacina-listagem/vacina-listagem.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({

  declarations: [
    VacinaListagemComponent,
  ],
  imports: [
    CommonModule,
    VacinasRoutingModule,
    HttpClientModule
  ],

  providers: [],
  bootstrap: [VacinaListagemComponent]

})

export class VacinasModule { }
