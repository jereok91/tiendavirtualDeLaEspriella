import { Component, OnInit } from '@angular/core';
import { generalAnimaciones } from "../../animaciones/animaciones";

@Component({
  selector: 'app-whatsapp-log',
  templateUrl: './whatsapp-log.component.html',
  styleUrls: ['./whatsapp-log.component.scss'],
  animations:[generalAnimaciones]
})
export class WhatsappLogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
