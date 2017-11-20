import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category, Product} from "../../interfaces/product.interface";
import {StoresMockupService} from "../../services/mocks/stores-mockup/stores-mockup.service";
import {Store} from "../../interfaces/stores.interface";

@Component({
    selector: 'app-product-details',
    templateUrl: 'product-details.component.html'
})
export class ProductDetailsComponent implements OnInit{

    @Input('product') item: Product;
    @Output() changeQuantity: EventEmitter<Number>;
    @Output() storeResponse: EventEmitter<Store[]>;

    viewMore: boolean = false;
    viewText: string = 'more';

    currency:string = '£';
    // amount: number = 10;
    quantity:number = 0;

    Stores: Store[];

    constructor(private storesMockup: StoresMockupService) {
        console.log('Hello ProductDetailsComponent Component ');
        // console.log(this.product.description);
        this.changeQuantity = new EventEmitter<Number>();
        this.storeResponse = new EventEmitter<Store[]>();
    }

    ngOnInit(){
        this.storesMockup.getMerchantSpecificStores()
            .subscribe((store)=>{
                console.log(store);
                if(store.status == 'fail'){
                    this.Stores = [];
                }else{
                    this.Stores = store.response;
                }
                this.storeResponse.emit(this.Stores);
            })
    }

    viewMoreOrLess() {
        if (this.viewText == 'more') {
            this.viewMore = true;
            this.viewText = 'less';
        }
        else {
            this.viewMore = false;
            this.viewText = 'more'
        }
    }

    addQuantity(q:number){
        if(q<this.item.quantity){
            this.quantity = q+1;
            // this.item.quantity = this.quantity;
            this.changeQuantity.emit(this.quantity);
        }
    }

    removeQuantity(q:number){
        if(q>0){
            this.quantity = q-1;
            // this.item.quantity = this.quantity;
            this.changeQuantity.emit(this.quantity);
        }
    }

}
