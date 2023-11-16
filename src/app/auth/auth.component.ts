import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    if(this.username == "handel" && this.password == "1234"){
      this.router.navigate(['/home']);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Usuario/contraseña errado - Intente nuevamente",
      });
    }
  }
}
