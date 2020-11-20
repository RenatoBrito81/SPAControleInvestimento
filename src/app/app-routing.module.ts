import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlterarTipoInvestimentoComponent } from './components/alterar-tipo-investimento/alterar-tipo-investimento.component';
import { HomeComponent } from './components/home/home.component';
import { ListarTipoInvestimentoComponent } from './components/listar-tipo-investimento/listar-tipo-investimento.component';
import { NovoTipoInvestimentoComponent } from './components/novo-tipo-investimento/novo-tipo-investimento.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'listarTipoInvestimento',
    component: ListarTipoInvestimentoComponent
  },
  {
    path: 'alterarTipoInvestimento/:id',
    component: AlterarTipoInvestimentoComponent
  },
  {
    path: 'novoTipoInvestimento',
    component: NovoTipoInvestimentoComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
