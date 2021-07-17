import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { nuevoProducto } from '../Model/nuevoProducto.model';
import { LoginService } from './login.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Injectable()
export class NuevoProductoService {
    errorMessage: string;

    constructor(private httpClient: HttpClient, private loginService: LoginService) { }

    registrarNuevoProducto(producto: nuevoProducto) {
        let headers = new HttpHeaders({
            accessToken: this.loginService.getAccessToken()
        });

        this.httpClient
            .post<nuevoProducto>(environment.productionUrl + '/producto', producto, {
                headers: headers,
            })
            .subscribe({
                next: (datos) => {
                    console.log('datos: ' + datos);
                    console.log('Producto creado correctamente ');

                    Swal.fire({
                        title: 'Producto Creado!',
                        text: 'El producto se registro con exito!',
                        icon: 'success',
                        confirmButtonText: 'Cool',
                    });

                },
                error: (error) => {
                    this.errorMessage = error.message;
                    console.error('error: ' + this.errorMessage);

                    if (error.status === 400) {
                        Swal.fire({
                            title: 'Error!',
                            text: error.error,
                            icon: 'error',
                            confirmButtonText: 'Cool',
                        });
                    } else {
                        Swal.fire({
                            title: 'Error!',
                            text: 'Ocurrio un error. Vuelva a intentarlo',
                            icon: 'error',
                            confirmButtonText: 'Cool',
                        });
                    }
                },
            });
    }
}