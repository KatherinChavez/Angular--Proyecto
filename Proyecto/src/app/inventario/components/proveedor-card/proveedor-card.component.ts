import { Component, Input} from '@angular/core';
import { Proveedor } from '../../interfaces/proveedor';

@Component({
  selector: 'app-proveedor-card',
  templateUrl: './proveedor-card.component.html',
  styleUrls: ['./proveedor-card.component.css']
})
export class ProveedorCardComponent  {

 @Input() proveedor! : Proveedor 
 
 

}
