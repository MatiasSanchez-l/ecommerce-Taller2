import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-contacto-page',
  templateUrl: './contacto-page.component.html',
  styleUrls: ['./contacto-page.component.css'],
})
export class ContactoPageComponent implements OnInit {
  formulario: FormGroup;
  constructor(private httpClient: HttpClient) {
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
      telefono: new FormControl(''),
      consulta: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }

  ngOnInit(): void {}

  registrarConsulta() {

    if (this.formulario.valid) {
      const consulta = {
        nombre: this.formulario.value.nombre,
        apellido: this.formulario.value.apellido,
        email: this.formulario.value.email,
        telefono: this.formulario.value.telefono,
        consulta: this.formulario.value.consulta,
      };
      console.log(consulta);
      try {
        console.log("entramos al try")
        this.httpClient.post<any>(
          environment.productionUrl + '/nodemailer/contacto',
          {
            nombre: this.formulario.value.nombre,
            apellido: this.formulario.value.apellido,
            email: this.formulario.value.email,
            telefono: this.formulario.value.telefono,
            consulta: this.formulario.value.consulta,
          }
        );
        Swal.fire({
          title: '¡Exito!',
          text: 'El formulario fue enviado con exito, dentro de los proximos dias se le resolvera la consulta!',
          icon: 'success',
          confirmButtonText: 'Cool',
        });
      } catch (error) {
        Swal.fire({
          title: 'Error!',
          text: error,
          icon: 'error',
          confirmButtonText: 'Cool',
        });
      }


    } else {
      Swal.fire({
        title: 'Error!',
        text: 'El formulario no cumple con las validaciones',
        icon: 'error',
        confirmButtonText: 'Cool',
      });
    }
    this.formulario.reset();
  }
}
