import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoPageComponent } from './Page/carrito-page/carrito-page.component';
import { ContactoPageComponent } from './Page/contacto-page/contacto-page.component';
import { DetailPageComponent } from './Page/detail-page/detail-page.component';
import { ErrorPageComponent } from './Page/error-page/error-page.component';
import { HomePageComponent } from './Page/home-page/home-page.component';
import { LoginPageComponent } from './Page/login-page/login-page.component';
import { RegistrarPageComponent } from './Page/registrar-page/registrar-page.component';
import { TiendaPageComponent } from './Page/tienda-page/tienda-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'registrar', component: RegistrarPageComponent },
  { path: 'contacto', component: ContactoPageComponent },
  { path: 'tienda', component: TiendaPageComponent },
  { path: 'tienda/:id', component: DetailPageComponent },
  { path: 'carrito', component: CarritoPageComponent },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
