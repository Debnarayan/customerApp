import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderListPage } from './order-list';
import {BillMockupService} from "../../services/mocks/bill-mockup/bill-mockup.service";

@NgModule({
  declarations: [
    OrderListPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderListPage),
  ],
    providers: [BillMockupService]
})
export class OrderListPageModule {}
