import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  forma: FormGroup;

  constructor( public _ls: LoginService, public router: Router ) {
    this.forma = new FormGroup({
      'email' : new FormControl(),
      'password' : new FormControl()
    });
  }

  ngOnInit() {
  }

  login() {
    this._ls.login(this.forma.value.email, this.forma.value.password)
      .subscribe( (res: any) => {
        if ( res === true ) {
          this.router.navigate(['/usuarios']);
        }
      } );
  }

}
