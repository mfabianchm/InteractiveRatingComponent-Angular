import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

//Al momento de hacer click guardar el valor del botón seleccionado y enviar ese valor al siguiente componente

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, HomeComponent],
  template: ` <router-outlet></router-outlet> `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  active = 10;
  title = 'my-app';
  buttons = [
    { id: 1, number: 1 },
    { id: 2, number: 2 },
    { id: 5, number: 3 },
    { id: 3, number: 4 },
    { id: 4, number: 5 },
  ];

  clickOnBtn(id: number) {
    this.active = id;
    //pasar este valor al siguiente componente
    let value = this.buttons[id].number;
  }
}
