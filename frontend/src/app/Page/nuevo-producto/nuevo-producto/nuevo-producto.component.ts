import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { nuevoProducto } from 'src/app/Model/nuevoProducto.model';
import { LoginService } from 'src/app/Service/login.service';
import { NuevoProductoService } from 'src/app/Service/nuevoProducto.service';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css'],
})
export class NuevoProductoComponent implements OnInit {
  producto: nuevoProducto;

  constructor(private loginService: LoginService, private router: Router, private nuevoProductoService: NuevoProductoService) {}

  ngOnInit(): void {
    if (!this.loginService.isLogueado()) {
      this.router.navigate(['/home']);
    }
  }

  registrar(form: NgForm) {
    const nombre = form.value.nombre;
    const clasificacion = form.value.clasificaciones;
    const precio = form.value.precio;
    const imagen = form.value.imagen;
    const descripcion = form.value.descripcion;
    console.log("clasificaciones " + clasificacion);

    this.producto = new nuevoProducto(nombre, descripcion, clasificacion, precio, imagen);
    
    this.nuevoProductoService.registrarNuevoProducto(this.producto);
  }
}
