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
import { ReactiveFormsModule } from '@angular/forms';
import { ProductoService } from './Service/producto.service';
import { HttpClientModule } from '@angular/common/http';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SweetAlert2Module,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
