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
    this.productosService.getProductos().subscribe((data) => {
      this.productos = data;
    });
  }

  onChange($event: any) {
    let orden = $event.target.value;
    console.log(this.productos);
    const ordenados = this.productos;
    if (orden === 1) {
      this.productos = ordenados.sort((a, b) =>
        a.precio < b.precio ? -1 : a.precio > b.precio ? 1 : 0
      );
    }
    if (orden === 2) {
      this.productos = ordenados.sort((a, b) =>
        a.precio < b.precio ? 1 : a.precio > b.precio ? -1 : 0
      );
    }
    console.log(this.productos);
  }

  agregarAlCarrito(id: string) {
    this.carritoService.agregarProductoAlCarrito(id);
    this.carritoService.setCarrito(this.carritoService.devolverCarritoActual());
    this.router.navigate(['carrito']);
  }
}
