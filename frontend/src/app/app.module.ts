import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderPageComponent } from './Page/header-page/header-page.component';
import { LoginPageComponent } from './Page/login-page/login-page.component';
import { HomePageComponent } from './Page/home-page/home-page.component';
import { TiendaPageComponent } from './Page/tienda-page/tienda-page.component';
import { ContactoPageComponent } from './Page/contacto-page/contacto-page.component';
import { ErrorPageComponent } from './Page/error-page/error-page.component';
import { CarritoPageComponent } from './Page/carrito-page/carrito-page.component';
import { RegistrarPageComponent } from './Page/registrar-page/registrar-page.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductoService } from './Service/producto.service';
import { HttpClientModule } from '@angular/common/http';
import { DetailPageComponent } from './Page/detail-page/detail-page.component';
import { UsuarioService } from './Service/usuario.service';
import { LoginService } from './Service/login.service';
import { CarritoService } from './Service/carrito.service';
import { RegistrarService } from './Service/registrar.service';
import { NuevoProductoComponent } from './Page/nuevo-producto/nuevo-producto/nuevo-producto.component';
import { NuevoProductoService } from './Service/nuevoProducto.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderPageComponent,
    LoginPageComponent,
    HomePageComponent,
    TiendaPageComponent,
    ContactoPageComponent,
    ErrorPageComponent,
    CarritoPageComponent,
    RegistrarPageComponent,
    DetailPageComponent,
    NuevoProductoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SweetAlert2Module,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductoService, UsuarioService, LoginService, CarritoService, RegistrarService, NuevoProductoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
