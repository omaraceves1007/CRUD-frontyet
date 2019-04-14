import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = `${URL_SERVICIOS}login`;

  constructor( public http: HttpClient) { }

  login( email: string, password: string ) {

    return this.http.post(this.url, { email, password } )
      .pipe( map ( (res: any) => {
        return res.ok;
      } ) );
  }
}
