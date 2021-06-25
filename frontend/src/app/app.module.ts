import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderPageComponent } from './header-page/header-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TiendaPageComponent } from './tienda-page/tienda-page.component';
import { ContactoPageComponent } from './contacto-page/contacto-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CarritoPageComponent } from './carrito-page/carrito-page.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
