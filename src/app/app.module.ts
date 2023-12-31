import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductViewComponent } from './products/product-view/product-view.component';
import { OrdersComponent } from './orders/orders.component';
import { UsersComponent } from './users/users.component';
import { PaymentComponent } from './payment/payment.component';
import { ShipmentComponent } from './shipment/shipment.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ProductListComponent,
    ProductViewComponent,
    OrdersComponent,
    UsersComponent,
    PaymentComponent,
    ShipmentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
