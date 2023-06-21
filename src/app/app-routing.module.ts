import { ExluirPensamentoComponent } from './componentes/pensamentos/exluir-pensamento/exluir-pensamento.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentosComponent } from './componentes/pensamentos/criar-pensamentos/criar-pensamentos.component';
import { ListarPensamentosComponent } from './componentes/pensamentos/listar-pensamentos/listar-pensamentos.component';
import { EditarPensamentosComponent } from './componentes/pensamentos/editar-pensamentos/editar-pensamentos.component';

const routes: Routes = [
  {
      path: '',
      redirectTo: 'listarPensamento',
      pathMatch: 'full'
  },
  {
      path: 'criarpensamento',
      component: CriarPensamentosComponent
  },
  {
      path: 'listarPensamento',
      component: ListarPensamentosComponent
  },
  {
      path: 'pensamentos/excluirPensamento/:id',
      component: ExluirPensamentoComponent
  },
  {
      path: 'pensamentos/editarPensamento/:id',
      component: EditarPensamentosComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
