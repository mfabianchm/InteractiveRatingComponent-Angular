import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//RECIBIR PROPS DEL VALUE Y USARLOS EN HTML DE THANKS, REVISAR COMO PASARLAS USANDO NAVEGACION

@Component({
  selector: 'app-thanks',
  standalone: true,
  imports: [],
  templateUrl: './thanks.component.html',
  styleUrl: './thanks.component.css',
})
export class ThanksComponent implements OnInit {
  constructor(private router: Router) {
    this.number = this.router.getCurrentNavigation()?.extras.state;
  }
  number;
  ngOnInit(): void {
    this.number = history.state.value;
  }
}
