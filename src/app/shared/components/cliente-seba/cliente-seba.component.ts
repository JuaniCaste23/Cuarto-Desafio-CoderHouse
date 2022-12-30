import { Component } from '@angular/core';
import { CartelDeEntradaService } from 'src/app/services/cartel-de-entrada.service';

@Component({
  selector: 'app-cliente-seba',
  templateUrl: './cliente-seba.component.html',
  styleUrls: ['./cliente-seba.component.scss']
})
export class ClienteSebaComponent {
  constructor(public CartelDeEntradaService: CartelDeEntradaService) {
    this.CartelDeEntradaService.avisos$.subscribe(console.log)
}}
