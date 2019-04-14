import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Usuario } from '../models/usuario.model';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = `${URL_SERVICIOS}usuario`;

  constructor( public http: HttpClient ) { }

  obtenerUsuarios() {
    return this.http.get(this.url).pipe( map( ( res: any ) => {
      return res.usuarios;
    } ) );
  }

  nuevoUsuario( usuario: Usuario ) {
    return this.http.post(this.url, usuario)
      .pipe( map( (res: any) => {
        return res.usuario;
      }));
  }

  borrarUsuario( id: string ) {
    const URL = this.url + '/' + id;
    return this.http.delete(URL).pipe( map( (res: any) => {
      return res.ok;
    } ) );
  }

  obtenerUsuario(id: string) {
    const URL = this.url + '/' + id;
    return this.http.get(URL).pipe( map( (res: any) => {
      return res.usuarios;
    }));
  }

  guardarUsuario( usuario: Usuario ) {
    const URL = this.url + '/' + usuario._id;
    return this.http.put(URL, usuario).pipe(map( (res: any) => {
      return res.usuario;
    }));
  }
}
