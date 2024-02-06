import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChamadosComponent } from './chamados/chamados.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';
import { ClienteNovoComponent } from './cliente-novo/cliente-novo.component';
import { ClienteEditarComponent } from './cliente-editar/cliente-editar.component';

@NgModule({
  declarations: [
    AppComponent,
    ChamadosComponent,
    LoginComponent,
    LogoutComponent,
    ClientesComponent,
    ClienteDetalheComponent,
    ClienteNovoComponent,
    ClienteEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
