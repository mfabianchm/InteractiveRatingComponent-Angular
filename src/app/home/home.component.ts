import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

//Al momento de hacer click guardar el valor del botón seleccionado y enviar ese valor al siguiente componente

@Component({
  selector: 'home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <main class="main">
      <img src="/assets/icon-star.svg" />
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        aprecciated to help us improve our offering!
      </p>
      <div class="btns-container">
        <button
          *ngFor="let btn of buttons; let i = index"
          class="btn-num"
          (click)="clickOnBtn(i)"
          [ngClass]="{ selected: active == i }"
        >
          {{ btn.number }}
        </button>
      </div>
      <button class="submit-btn" (click)="submit()">SUBMIT</button>
    </main>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private router: Router) {}
  value = 0;
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
    this.value = value;
  }

  submit() {
    this.router.navigate(['/thanks'], {
      state: { value: this.value },
    });
  }
}
