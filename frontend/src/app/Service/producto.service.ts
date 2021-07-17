import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../Model/producto.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class ProductoService {
  productos: Producto[] = [];

  constructor(private httpClient: HttpClient) {}

  getProductos(): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(
      environment.productionUrl + '/producto'
    );
  }

  getTresProductos() {
    this.getProductos().subscribe((data) => {
      this.productos = data;
    });
    let tresProductos: Producto[] = [];
    tresProductos.push(
      this.productos[Math.floor(Math.random() * this.productos.length)]
    );
    tresProductos.push(
      this.productos[Math.floor(Math.random() * this.productos.length)]
    );
    tresProductos.push(
      this.productos[Math.floor(Math.random() * this.productos.length)]
    );
    return tresProductos;
  }

  getRandomProduct() {
    this.getProductos().subscribe((data) => {
      this.productos = data;
    });
    return this.productos[Math.floor(Math.random() * this.productos.length)];
  }

  getProductosById(id: string): Observable<Producto> {
    return this.httpClient.get<Producto>(
      environment.productionUrl + '/producto/' + id
    );
  }
}
