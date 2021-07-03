import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../Model/usuario.model.ts';

@Injectable()
export class UsuarioService {
   

  constructor(private httpClient: HttpClient) {}
  
  loguearUsuario(usuario:Usuario){
    return this.httpClient.post<Usuario>(
        environment.productionUrl + '/usuario/loguear', usuario
      );
  }

  desloguearUsuario(){

  }
}
