import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/Model/producto.model';
import { CarritoService } from 'src/app/Service/carrito.service';
import { ProductoService } from 'src/app/Service/producto.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css'],
})
export class DetailPageComponent implements OnInit {
  id: string = '';
  producto: Producto[] = [];
  productosCarrousel: Producto[] = [];
  constructor(
    private productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router,
    private carritoService: CarritoService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id != null) {
      this.productoService.getProductosById(this.id).subscribe((data) => {
        this.producto.push(data);
      });
      this.mostrarProductosDeLaMismaCategoria(this.id);
    }
  }

  agregarAlCarrito(id: string) {
    this.carritoService.agregarProductoAlCarrito(id);
    this.router.navigate(['carrito']);
  }

  mostrarProductosDeLaMismaCategoria(id: string) {
    this.productoService.getProductosById(this.id).subscribe((data) => {
      this.productosCarrousel =
        this.productoService.mostrarProductosPorClasificacion(
          data.clasificacion,
          this.id
        );
    });
  }
}
