import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styles: []
})
export class ActualizarComponent implements OnInit {

  // forma: FormGroup;
  usuario: Usuario = new Usuario('', '', '');

  constructor( public _us: UsuarioService, public router: Router,
                public activateRoute: ActivatedRoute ) {
    activateRoute.params.subscribe( params => {
      this.cargarUsiario(params['id']);
    } );
  }

  ngOnInit() {
  }

  cargarUsiario(id: string) {
    this._us.obtenerUsuario(id).subscribe((res: any) => {
      this.usuario.nombre = res.nombre;
      this.usuario.email = res.email;
      this.usuario.password = res.password;
      this.usuario._id = res._id;
    });
  }

  guardar(f: NgForm) {
    if (f.invalid) {
      return;
    }
    this._us.guardarUsuario(this.usuario).subscribe((res: any) => {
      alert('Guardado: ' + res.nombre);
      this.router.navigate(['/usuarios']);
    });
  }
}
