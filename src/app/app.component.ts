import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{ //"implements" to say Angular to maintain the session logged when you refresh

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.localAuthSetup();
  }

}
