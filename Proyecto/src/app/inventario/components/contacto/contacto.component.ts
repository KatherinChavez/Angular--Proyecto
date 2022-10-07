import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  @Input() public correo: string = ''
  @Input() public telefono: number = 0

  constructor() { }

  ngOnInit(): void {
  }

}
