import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Service/login.service';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.css'],
})
export class HeaderPageComponent implements OnInit {
  
  constructor(private loginService:LoginService) {}

  ngOnInit(): void {}
  
  isLogueado(){
    return this.loginService.isLogueado();
  }

  cerrarSesion(){
    this.loginService.cerrarSesion();
  }
}
