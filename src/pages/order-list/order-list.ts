import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Order} from "../../interfaces/product.interface";

@IonicPage()
@Component({
  selector: 'page-order-list',
  templateUrl: 'order-list.html',
})
export class OrderListPage {
    Orders:Array<Order>;

  constructor(private navCtrl: NavController, private navParams: NavParams) {
      this.Orders = navParams.get('placedOrders');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderListPage');
  }

  placeOrder(){
      console.log(this.Orders);
      this.calculateTotalBill(this.Orders).then((result)=>{
          this.navCtrl.push('PaymentPage',{bill: result});
      });

  }

  calculateTotalBill(orders){
      var total_price = 0;
      var total_quantity = 0;
      for(let i=0; i<orders.length; i++){
          total_quantity = total_quantity + orders[i].quantity;
          total_price = total_price + (orders[i].quantity*orders[i].price);
      }
      return new Promise((resolve, reject) => {
              resolve({total_price: total_price, total_quantity: total_quantity});
      });

  }

}
