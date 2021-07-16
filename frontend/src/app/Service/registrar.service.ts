import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../Model/usuario.model.ts';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Injectable()
export class RegistrarService {
    errorMessage: string;

    constructor(private httpClient: HttpClient, private router: Router) { }

    registrarUsuario(usuario: Usuario) {
        const requestOptions: Object = {
            responseType: 'text'
          }
        this.httpClient.post<Usuario>(
            environment.productionUrl + '/usuario/registrar', usuario, requestOptions).subscribe(
                (response:any)=>{
                    console.log(response);

                    Swal.fire({
                        title: 'Registrado!',
                        text: 'Se registro con exito! Debe validar su email para poder loguearse.',
                        icon: 'success',
                        confirmButtonText: 'Cool',
                      });

                      this.router.navigate(['/home']);
                },
                (error: any)=>{
                    this.errorMessage = error.message;
                    console.error('error: ' + this.errorMessage);

                    Swal.fire({
                        title: 'Error!',
                        text: 'Ocurrio un error en el registro, vuelva a intentarlo!',
                        icon: 'error',
                        confirmButtonText: 'Cool',
                      });
                });
    }
}