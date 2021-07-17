import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { nuevoProducto } from '../Model/nuevoProducto.model';

@Injectable()
export class NuevoProductoService {
    constructor(private httpClient: HttpClient) {}

    registrarNuevoProducto(producto: nuevoProducto){}
}