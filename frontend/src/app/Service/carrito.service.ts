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
      data.cantidad = 1;
      data.precioTotal = data.precio;
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

  aumentarCantidadDeProductoDelCarrito(id: string) {
    let producto = this.carrito.find((e) => e.id === id);
    if (producto != null) {
      //this.carrito = this.carrito.filter((e) => e.id !== id);
      producto.cantidad = producto.cantidad + 1;
      this.carrito.push(producto);
    }
  }
  restarCantidadDeProductoDelCarrito(id: string) {
    let producto = this.carrito.find((e) => e.id === id);
    if (producto != null) {
      //this.carrito = this.carrito.filter((e) => e.id !== id);
      if (producto.cantidad > 1) producto.cantidad = producto.cantidad - 1;
      this.carrito.push(producto);
    }
  }

  calcularPrecioTotalDelProducto(id: string) {
    let producto = this.carrito.find((e) => e.id === id);
    if (producto != null) {
      this.carrito = this.carrito.filter((e) => e.id !== id);
      producto.precioTotal = producto.cantidad * producto.precio;
      this.carrito.push(producto);
    }
  }
  calcularValorTotalDelCarrito() {
    let precioTotal: number = 0;
    this.carrito.forEach((e) => {
      precioTotal += e.precioTotal;
    });
    return precioTotal;
  }
  borrarProductoDelCarrito(id: string) {
    this.carrito = this.carrito.filter((e) => e.id !== id);
  }
}
