import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {Category, Order, Product} from "../../interfaces/product.interface";
import {ToastService} from "../../providers/toast/toast.service";
import {DatabaseConfig} from "../../config/database.config";
import {GlobalConfig} from "../../config/global.config";
import {StoresMockupService} from "../../services/mocks/stores-mockup/stores-mockup.service";
import {Store} from "../../interfaces/stores.interface";


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
    Stores: Store[];
    defaultStore: Store;
    quantity: number = 0;
    totalQuantity: number = 0;

    constructor(private global: GlobalConfig,
                private navCtrl: NavController,
                private navParams: NavParams,
                private viewCtrl: ViewController,
                private dbConfig: DatabaseConfig,
                private myElement: ElementRef,
                private toast: ToastService,
                private storeMockup: StoresMockupService) {
        //===============================
        this.showheader = false;
        this.hideheader = true;
        //===============================

        this.orderItem = navParams.get('item');
        console.log(this.orderItem);
        this.productDetails = navParams.get('item');
        this.categoryDetails = navParams.get('category');
        // this.imgName = navParams.get('img');
    }

    //=======================================
    ngOnInit() {
        console.log('oninit');
        this.dbConfig.createCartTable()
            .then(()=>{
                this.dbConfig.selectRecordsByTableName('cart','*', 'customer_id', this.global.getCustomerId())
                    .then((data) => {
                        if(data){
                            this.calculateTotalOrderQuantity(data);
                        }
                    });
            })
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

    ionViewWillEnter(){
        console.log('ionViewWillEnter ProductDetailsPage ');
        this.setDefaultStore(this.Stores);
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

    merchantStoreDetails(ev){
        console.log('event');
        this.Stores = ev;
        this.setDefaultStore(this.Stores);
    }

    setDefaultStore(stores){
        if(typeof stores !== 'undefined'){
            this.storeMockup.selectDefaultStore(stores)
                .then(store => {
                    this.defaultStore = store;
                })
        }else {
            this.defaultStore = {venue_id:null, venue_name:'No Store Selected'};
        }
        console.log(this.defaultStore);
    }

    addToCart(item: Order) {
        this.orderItem.quantity = this.quantity;
        console.log(item);
        console.log(this.orderItem);
        this.dbConfig.storeOrderData(this.global.getCustomerId(), this.orderItem)
            .then(() => {
                setTimeout(() => {
                    this.dbConfig.selectRecordsByTableName('cart','*', 'customer_id', this.global.getCustomerId())
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
        this.dbConfig.selectRecordsByTableName('cart','*', 'customer_id', this.global.getCustomerId())
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

    goToStoreLists(){
        if(this.Stores.length > 0){
            this.navCtrl.push('StoreListPage',{stores: this.Stores, default_store: this.defaultStore})
        }else{
            this.toast.commonToast('',3000,'You have no store details',true)
        }

    }

}
