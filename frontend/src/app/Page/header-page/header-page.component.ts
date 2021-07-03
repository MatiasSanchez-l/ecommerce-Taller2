import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/Service/carrito.service';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.css'],
})
export class HeaderPageComponent implements OnInit {

  cantidadCarrito: number = 0;

  constructor(private carritoService: CarritoService) {
    console.log(
      'cantidad del carrito' +
        this.carritoService.devolverCarritoActual().length
    );
  }

  ngOnInit(): void {
    console.log(
      'cantidad del carrito' +
        this.carritoService.devolverCarritoActual().length
    );
  }
}
