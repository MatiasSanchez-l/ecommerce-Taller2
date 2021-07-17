import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Model/usuario.model.ts';
import { LoginService } from 'src/app/Service/login.service';
import { RegistrarService } from 'src/app/Service/registrar.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-page',
  templateUrl: './registrar-page.component.html',
  styleUrls: ['./registrar-page.component.css'],
})
export class RegistrarPageComponent implements OnInit {
  formulario: FormGroup;
  usuario: Usuario;
  constructor(
    private registrarServicio: RegistrarService,
    private loginService: LoginService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      apellido: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(\D)+(\w)*((\.(\w)+)?)+@(\D)+(\w)*((\.(\D)+(\w)*)+)?(\.)[a-z]{2,}$/
        ),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      repite_password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      direccion: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }

  ngOnInit(): void {
    if (this.loginService.isLogueado()) {
      this.router.navigate(['/home']);
    }
  }

  registrar() {
    const email = this.formulario.value.email;
    const nombre = this.formulario.value.nombre;
    const apellido = this.formulario.value.apellido;
    const direccion = this.formulario.value.direccion;
    const contrasenia = this.formulario.value.password;
    const contraseniaRepetida = this.formulario.value.repite_password;

    if (contrasenia != contraseniaRepetida) {
      Swal.fire({
        title: 'Error!',
        text: 'Las contraseñas no coinciden!',
        icon: 'error',
        confirmButtonText: 'Cool',
      });
    } else {
      this.usuario = new Usuario(
        email,
        contrasenia,
        nombre,
        apellido,
        direccion
      );

      this.registrarServicio.registrarUsuario(this.usuario);
    }
  }

}
