import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemManagementComponent } from './components/item-management/item-management.component';

const routes: Routes = [
  { path: 'item', component: ItemManagementComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemRoutingModule { }
