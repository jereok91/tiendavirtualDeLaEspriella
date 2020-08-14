import { Component, OnInit } from '@angular/core';
import { generalAnimaciones } from "../../animaciones/animaciones";

@Component({
  selector: 'app-piedepagina',
  templateUrl: './piedepagina.component.html',
  styleUrls: ['./piedepagina.component.scss'],
  animations: [generalAnimaciones]
  

})
export class PiedepaginaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
  }
  
  public year= new Date().getUTCFullYear();
}
