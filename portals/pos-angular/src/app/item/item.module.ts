import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemRoutingModule } from './item-routing.module';
import { ItemManagementComponent } from './components/item-management/item-management.component';
import { ItemCreateComponent } from './components/item-management/item-create/item-create.component';
import { ItemListComponent } from './components/item-management/item-list/item-list.component';


@NgModule({
  declarations: [
       ItemManagementComponent,
       ItemCreateComponent,
       ItemListComponent
  ],
  imports: [
    CommonModule,
    ItemRoutingModule
  ]
})
export class ItemModule { }
