import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemListComponent } from './item/item-list/item-list.component';


const routes: Routes = [
  {path : '' , redirectTo: 'itemlist' , pathMatch: 'full'},
  {path : 'itemlist' , component : ItemListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
