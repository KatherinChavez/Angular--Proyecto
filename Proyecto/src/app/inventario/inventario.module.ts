import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { OrdenesComponent } from './components/ordenes/ordenes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProveedorComponent } from './components/proveedor/proveedor.component';
import { ProveedorCardComponent } from './components/proveedor-card/proveedor-card.component';
import { ContactoComponent } from './components/contacto/contacto.component';



@NgModule({
  declarations: [ 
    MenuComponent,
    ProductosComponent,
    ClientesComponent,
    OrdenesComponent,
    NotFoundComponent,
    ProveedorComponent,
    ProveedorCardComponent,
    ContactoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    MenuComponent,
    ProductosComponent,
    ClientesComponent
  ],
})
export class InventarioModule { }
