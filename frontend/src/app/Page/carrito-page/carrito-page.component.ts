import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Model/producto.model';
import { CarritoService } from 'src/app/Service/carrito.service';

@Component({
  selector: 'app-carrito-page',
  templateUrl: './carrito-page.component.html',
  styleUrls: ['./carrito-page.component.css'],
})
export class CarritoPageComponent implements OnInit {
  carrito: Producto[] = [];
  precioTotalDelCarrito: number = 0;

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.carrito = this.carritoService.devolverCarritoActual();
    this.precioTotalDelCarrito =
      this.carritoService.calcularValorTotalDelCarrito();
  }

  aumentarCantidad(id: string) {
    this.carritoService.aumentarCantidadDeProductoDelCarrito(id);
    this.carritoService.calcularPrecioTotalDelProducto(id);
    this.carritoService.calcularValorTotalDelCarrito();
    this.ngOnInit();
  }

  restarCantidad(id: string) {
    this.carritoService.restarCantidadDeProductoDelCarrito(id);
    this.carritoService.calcularPrecioTotalDelProducto(id);
    this.carritoService.calcularValorTotalDelCarrito();
    this.ngOnInit();
  }
  borrarProductoDelCarrito(id: string) {
    this.carritoService.borrarProductoDelCarrito(id);
    this.ngOnInit();
  }
}
