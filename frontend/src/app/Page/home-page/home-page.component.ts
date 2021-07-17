import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Model/producto.model';
import { ProductoService } from 'src/app/Service/producto.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  productos: Producto[] = [];
  productoAMostrar: Producto[] = [];
  constructor(private productosService: ProductoService) {}

  ngOnInit(): void {
    this.productos = this.productosService.getTresProductos();
    this.productoAMostrar.push(this.productosService.getRandomProduct());
  }
}
