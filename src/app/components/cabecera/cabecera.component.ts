import { Component, OnInit } from '@angular/core';
import { generalAnimaciones } from "../../animaciones/animaciones";

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss'],
  animations: [
    generalAnimaciones 
  ]
})
export class CabeceraComponent implements OnInit {
  isMenuCollapsed= true;
  constructor() { }

  ngOnInit(): void {
  }

}
