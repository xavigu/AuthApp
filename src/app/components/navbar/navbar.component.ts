import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(public auth: AuthService) { //Aqui esta publico porque se utiliza el servicio en el html del componente

  }

  ngOnInit() {
    console.log('Auth object', this.auth); 
  }
}
