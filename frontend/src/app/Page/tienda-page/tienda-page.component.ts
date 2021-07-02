import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Model/producto.model';
import { ProductoService } from 'src/app/Service/producto.service';

@Component({
  selector: 'app-tienda-page',
  templateUrl: './tienda-page.component.html',
  styleUrls: ['./tienda-page.component.css'],
})
export class TiendaPageComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private productosService: ProductoService) {}

  ngOnInit(): void {
    this.onLoad();
    this.productosService.obtenerProductos();
  }

  onLoad(): void {
    console.log('entramos a ngOnInit productos');
    /*this.productosService.getProductos().subscribe((data) => {
      console.log('entramos a this.productos = productos; ');
      this.productos = data;
      console.log(this.objectKeys(data),data[0])
      console.log('entramos a tthis.productosService.setProducto(productos); ');
      this.productosService.setProducto(data);
    });*/

    this.productosService.getProductos().subscribe((data) => {
      this.productos = data;

      console.log(this.productos)
    });
  }
}
