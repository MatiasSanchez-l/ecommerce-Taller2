import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../Model/producto.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class ProductoService {
  productos: Producto[] = [];

  constructor(private httpClient: HttpClient) {}

  setProducto(producto: Producto[]) {
    console.log('entramos a setProductos');
    this.productos = producto;
  }

  getProductos(): Observable<Producto[]> {
    console.log('entramos a getProductos');

    return this.httpClient.get<Producto[]>(
      environment.productionUrl + '/producto'
    );
  }
  obtenerProductos() {
    console.log('entramos a obtener productos');

    return this.getProductos();
  }
}
