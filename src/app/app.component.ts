import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'filmes';
  
  constructor(private router: Router) {}

  navigate(menu: string) {
    if (menu === 'filmes') {
      this.router.navigate(['/filmes']);
    } else if (menu === 'categorias') {
      this.router.navigate(['/categorias']);
    }
  }

  logout() {
    this.router.navigate(['/']);
  }
}
