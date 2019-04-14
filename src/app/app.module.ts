import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CrearComponent } from './pages/crear/crear.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { ActualizarComponent } from './pages/actualizar/actualizar.component';
import { UsuarioService } from './services/usuario.service';
import { APP_ROUTES } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CrearComponent,
    UsuariosComponent,
    ActualizarComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UsuarioService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
