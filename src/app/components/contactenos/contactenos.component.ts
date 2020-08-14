import { Component, OnInit } from '@angular/core';
import { generalAnimaciones } from "../../animaciones/animaciones";

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.scss'],
  animations: [generalAnimaciones]
})
export class ContactenosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
