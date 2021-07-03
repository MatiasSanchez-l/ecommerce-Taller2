import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Model/producto.model';
import { CarritoService } from 'src/app/Service/carrito.service';
import { ProductoService } from 'src/app/Service/producto.service';

@Component({
  selector: 'app-tienda-page',
  templateUrl: './tienda-page.component.html',
  styleUrls: ['./tienda-page.component.css'],
})
export class TiendaPageComponent implements OnInit {
  productos: Producto[] = [];

  constructor(
    private productosService: ProductoService,
    private carritoService: CarritoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.onLoad();
  }

  onLoad(): void {
    console.log('entramos a ngOnInit productos');
    this.productosService.getProductos().subscribe((data) => {
      this.productos = data;
    });
  }

  agregarAlCarrito(id: string) {
    console.log('entramos a agregarCarrito');
    this.carritoService.agregarProductoAlCarrito(id);
    this.carritoService.setCarrito(this.carritoService.devolverCarritoActual());
    console.log('agregamos prodcuto a agregarCarrito');
    this.router.navigate(['carrito']);
  }
}
