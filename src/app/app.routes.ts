import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { CrearComponent } from './pages/crear/crear.component';
import { ActualizarComponent } from './pages/actualizar/actualizar.component';

const APPROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'usuarios', component: UsuariosComponent },
    { path: 'crear', component: CrearComponent },
    { path: 'actualizar/:id', component: ActualizarComponent },
    { path: '**', component: LoginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];

export const APP_ROUTES = RouterModule.forRoot( APPROUTES);
