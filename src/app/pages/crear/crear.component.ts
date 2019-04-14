import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styles: []
})
export class CrearComponent implements OnInit {

  forma: FormGroup;
  usuario: Usuario = new Usuario ('', '', '');
  constructor( public _us: UsuarioService ) {
    this.forma = new FormGroup({
      'nombre' : new FormControl(),
      'email' : new FormControl(),
      'password' : new FormControl()
    });
   }

  ngOnInit() {
  }

  guardar(forma: any) {
    this.usuario.nombre = forma.nombre;
    this.usuario.email = forma.email;
    this.usuario.password = forma.password;
    this._us.nuevoUsuario(this.usuario)
      .subscribe( (res: any) => {
        alert('Guardado: ' + res.nombre );
      } );
  }
}
