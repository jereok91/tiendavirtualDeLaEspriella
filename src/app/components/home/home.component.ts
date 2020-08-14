import { Component, OnInit } from '@angular/core';
import { generalAnimaciones } from "../../animaciones/animaciones";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [generalAnimaciones]
})
export class HomeComponent implements OnInit {

  variable: string= "in";
  constructor() { }

  ngOnInit(): void {
  }

}
