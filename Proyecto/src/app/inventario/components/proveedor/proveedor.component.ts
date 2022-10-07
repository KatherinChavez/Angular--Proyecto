import { Component, OnInit } from '@angular/core';
import { ProveedorService } from '../../services/proveedor.service';
import { Proveedor } from '../../interfaces/proveedor';
import { tap } from 'rxjs';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: [
  ]
})
export class ProveedorComponent implements OnInit {
 
  proveedors: Proveedor[] = []

  constructor( private readonly proveedorService: ProveedorService) { }

  ngOnInit(): void {
   this.proveedorService.findAll().subscribe(data => this.proveedors = data) 
  }
 
  
}
