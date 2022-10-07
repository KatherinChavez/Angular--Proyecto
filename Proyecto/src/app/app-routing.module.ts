import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './inventario/components/clientes/clientes.component';
import { MenuComponent } from './inventario/components/menu/menu.component';
import { OrdenesComponent } from './inventario/components/ordenes/ordenes.component';
import { ProductosComponent } from './inventario/components/productos/productos.component';
import { CommentsComponent } from './inventario/components/comments/comments.component';
import { CommonModule } from '@angular/common';
import { CommentDetailsComponent } from './inventario/components/comment-details/comment-details.component';
import { NotFoundComponent } from './inventario/components/not-found/not-found.component';
import { ProveedorComponent } from './inventario/components/proveedor/proveedor.component';
import { InventarioModule } from './inventario/inventario.module';
import { ProveedorCardComponent } from './inventario/components/proveedor-card/proveedor-card.component';

const routes: Routes = [
  { path: '' , redirectTo: 'menu', pathMatch: 'full' },
  { path: 'clientes' , component: ClientesComponent },
  { path: 'ordenes' , component: OrdenesComponent},
  { path: 'productos' , component: ProductosComponent},
  { path: 'menu' , component: MenuComponent},
  { path: 'comments' , component: CommentsComponent},
  { path: 'comments/:id', component: CommentDetailsComponent},
  { path: 'proveedor' , component: ProveedorComponent,
    children: [
  { path: 'proveedor-card', component: ProveedorCardComponent}
]},
  { path: '**', component: NotFoundComponent},
]; 

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)], 
  declarations:[CommentsComponent, CommentDetailsComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }
