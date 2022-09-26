import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { ItemComponent } from './components/item/item.component';
import { CustomerComponent } from './components/customer/customer.component';
import { StockComponent } from './components/stock/stock.component';


@NgModule({
  declarations: [
    ItemComponent,
    CustomerComponent,
    StockComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule
  ]
})
export class SalesModule { }
