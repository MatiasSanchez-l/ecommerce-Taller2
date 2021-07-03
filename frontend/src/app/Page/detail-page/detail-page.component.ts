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
    }
  }

  agregarAlCarrito(id: string) {
    console.log("entramos a agregarCarrito")
    this.carritoService.agregarProductoAlCarrito(id);
    console.log("agregamos prodcuto a agregarCarrito")
    this.router.navigate(['carrito']);
  }
}
