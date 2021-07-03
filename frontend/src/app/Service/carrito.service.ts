import { EventEmitter, Injectable, Output } from '@angular/core';
import { Producto } from '../Model/producto.model';
import { ProductoService } from './producto.service';

@Injectable()
export class CarritoService {
  @Output() cantidadCarrito = new EventEmitter<number>();

  carrito: Producto[];

  constructor(private productoSerive: ProductoService) {
    this.carrito = [];
  }

  agregarProductoAlCarrito(id: string) {
    this.productoSerive.getProductosById(id).subscribe((data) => {
      this.carrito.push(data);
    });
  }

  setCarrito(carrito: Producto[]) {
    this.carrito = carrito;
  }

  devolverCarritoActual() {
    return this.carrito;
  }

  cantidadObjetosEnElCarrito() {
    this.cantidadCarrito.emit(this.carrito.length);
  }
}
