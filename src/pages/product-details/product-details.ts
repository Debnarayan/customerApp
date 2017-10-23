import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {Category, Order, Product} from "../../interfaces/product.interface";
import {ToastService} from "../../providers/toast/toast.service";
import {DatabaseConfig} from "../../config/database.config";


@IonicPage()
@Component({
    selector: 'page-product-details',
    templateUrl: 'product-details.html',
})
export class ProductDetailsPage implements OnInit {

    //===================================
    @ViewChild(Content) content: Content;
    start = 0;
    threshold = 100;
    slideHeaderPrevious = 0;
    ionScroll: any;
    showheader: boolean;
    hideheader: boolean;
    //===================================


    orderItem: Order;
    productDetails: Product;
    categoryDetails: Category;
    // imgName:string;
    storeName: string = "No Store Selected";
    quantity: number = 0;
    totalQuantity: number = 0;

    constructor(private navCtrl: NavController,
                private navParams: NavParams,
                private viewCtrl: ViewController,
                private dbConfig: DatabaseConfig,
                private myElement: ElementRef,
                private toast: ToastService) {
        //===============================
        this.showheader = false;
        this.hideheader = true;
        //===============================

        this.dbConfig.selectData()
            .then((data) => {
            if(data){
                this.calculateTotalOrderQuantity(data);
            }
            });

        this.orderItem = navParams.data.item;
        console.log(this.orderItem);
        this.productDetails = navParams.get('item');
        this.categoryDetails = navParams.get('category');
        // this.imgName = navParams.get('img');
    }

    //=======================================
    ngOnInit() {
// Ionic scroll element
        this.ionScroll = this.myElement.nativeElement.getElementsByClassName('scroll-content')[0];
// On scroll function
        this.ionScroll.addEventListener("scroll", () => {
            if (this.ionScroll.scrollTop - this.start > this.threshold) {
                this.showheader = true;
                this.hideheader = false;
            } else {
                this.showheader = false;
                this.hideheader = true;
            }
            if (this.slideHeaderPrevious >= this.ionScroll.scrollTop - this.start) {
                this.showheader = false;
                this.hideheader = true;
            }
            this.slideHeaderPrevious = this.ionScroll.scrollTop - this.start;
        });
    }

    //=======================================

    ionViewDidLoad() {
        console.log('ionViewDidLoad ProductDetailsPage ');
    }

    onDismiss() {
        this.toast.dismissToast()
            .then(() => {
                this.viewCtrl.dismiss();
            })
            .catch(() => {
                this.viewCtrl.dismiss();
            })
    }

    quantityOnChange(ev) {
        console.log(ev);
        this.quantity = ev;
    }

    addToCart(item: Order) {
        this.orderItem.quantity = this.quantity;
        console.log(item);
        console.log(this.orderItem);
        this.dbConfig.storeOrderData(this.orderItem)
            .then(() => {
                setTimeout(() => {
                    this.dbConfig.selectData()
                        .then((data) => {
                            if (data) {
                                this.calculateTotalOrderQuantity(data);
                            }
                        });
                }, 1000);
            });
        this.toast.presentToast('Order Successfully Placed');
    }

    goToOrders() {
        this.dbConfig.selectData()
            .then((data) => {
                console.log(data);
                if (data) {
                    this.navCtrl.push('OrderListPage', {placedOrders: data});
                }
            })
    }

    calculateTotalOrderQuantity(orders) {
        this.totalQuantity = 0;
        for (let i = 0; i < orders.length; i++) {
            this.totalQuantity = orders[i]['quantity'] + this.totalQuantity;
        }
    }
}
