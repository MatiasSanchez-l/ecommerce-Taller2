import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/Model/usuario.model.ts';
import { LoginService } from 'src/app/Service/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  usuario: Usuario;
  logueado: boolean = false;
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  loguear(form: NgForm) {
    const email = form.value.email;
    const contrasenia = form.value.password;
    this.loginService.loguearUsuario(email, contrasenia);
    this.logueado = this.loginService.isLogueado();

    if (this.logueado) {
      Swal.fire({
        title: 'Bienvenido!',
        text: '',
        icon: 'success',
        confirmButtonText: 'Cool',
      });
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Usuario o contraseña incorrecta',
        icon: 'error',
        confirmButtonText: 'Cool',
      });
    }
  }
}
