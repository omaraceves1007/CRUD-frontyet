import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];
  constructor( public _us: UsuarioService, public router: Router) {
    this.obtenerUsuarios();
   }

  ngOnInit() {
  }

  obtenerUsuarios() {
    this._us.obtenerUsuarios().subscribe( (res: any) => {
      this.usuarios = res;
    });
  }
  borrar(id: string) {
    console.log('borrar: ' + id);
    this._us.borrarUsuario(id).subscribe( (res: any) => {
      if (res === true) {
        alert('"Eliminado"');
      }
    this.obtenerUsuarios();
    });
  }
  actualiza(id: string) {
    this.router.navigate(['/actualizar', id]);
  }
}
