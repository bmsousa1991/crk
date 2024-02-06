import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Incluindo import para os componentes

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';
import { ClienteEditarComponent } from './cliente-editar/cliente-editar.component';
import { ClienteNovoComponent } from './cliente-novo/cliente-novo.component';
import { ChamadosComponent } from './chamados/chamados.component';

// Definindo as rotas

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'login'}
  },

  {
    path: 'logout',
    component: LogoutComponent,
    data: { title: 'logout'}
  },

  {
    path: 'clientes',
    component: ClientesComponent,
    data: { title: 'Lista de Clientes'}
  },

  {
    path: 'cliente-detalhe/:id',
    component: ClienteDetalheComponent,
    data: { title: 'Detalhe do Cliente'}
  },

  {
    path: 'cliente-novo',
    component: ClienteNovoComponent,
    data: { title: 'Adcionar CLiente'}
  },

  {
    path: 'cliente-editar/:id',
    component: ClienteEditarComponent,
    data: { title: 'login'}
  },

  {
    path: 'chamados',
    component: ChamadosComponent,
    data: { title: 'chamados'}
  },

  {
    path: '',
    redirectTo: '/clientes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
