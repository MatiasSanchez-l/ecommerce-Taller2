import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoPageComponent } from './Pages/carrito-page/carrito-page.component';
import { ContactoPageComponent } from './Pages/contacto-page/contacto-page.component';
import { ErrorPageComponent } from './Pages/error-page/error-page.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { RegistrarPageComponent } from './Pages/registrar-page/registrar-page.component';
import { TiendaPageComponent } from './Pages/tienda-page/tienda-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'registrar', component: RegistrarPageComponent },
  { path: 'contacto', component: ContactoPageComponent },
  { path: 'tienda', component: TiendaPageComponent },
  { path: 'carrito', component: CarritoPageComponent },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
