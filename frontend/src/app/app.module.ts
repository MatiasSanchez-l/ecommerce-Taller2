import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderPageComponent } from './Pages/header-page/header-page.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { TiendaPageComponent } from './Pages/tienda-page/tienda-page.component';
import { ContactoPageComponent } from './Pages/contacto-page/contacto-page.component';
import { ErrorPageComponent } from './Pages/error-page/error-page.component';
import { CarritoPageComponent } from './Pages/carrito-page/carrito-page.component';
import { RegistrarPageComponent } from './Pages/registrar-page/registrar-page.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

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
  imports: [BrowserModule, AppRoutingModule, SweetAlert2Module],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
