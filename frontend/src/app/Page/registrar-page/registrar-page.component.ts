import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/Model/usuario.model.ts';
import { RegistrarService } from 'src/app/Service/registrar.service';

@Component({
  selector: 'app-registrar-page',
  templateUrl: './registrar-page.component.html',
  styleUrls: ['./registrar-page.component.css'],
})
export class RegistrarPageComponent implements OnInit {
  formulario: FormGroup;
  usuario: Usuario;
  constructor(private registrarServicio: RegistrarService) {
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
        Validators.pattern(
          /^(\D)+(\w)*((\.(\w)+)?)+@(\D)+(\w)*((\.(\D)+(\w)*)+)?(\.)[a-z]{2,}$/
        ),
      ]),
      password: new FormControl(),
      repite_password: new FormControl(),
      direccion: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }

  ngOnInit(): void {}

  registrar(){
    const email = this.formulario.value.email;
    const nombre = this.formulario.value.nombre;
    const apellido = this.formulario.value.apellido;
    const direccion = this.formulario.value.direccion;
    const contrasenia = this.formulario.value.password;
    
    this.usuario = new Usuario(email, contrasenia, nombre, apellido, direccion);

    this.registrarServicio.registrarUsuario(this.usuario);
  }

  onSubmit() {
    console.log(this.formulario.value);
  }
}
