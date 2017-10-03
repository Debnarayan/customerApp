import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Category, Product} from "../../interfaces/product.interface";

@Component({
    selector: 'app-product-details',
    templateUrl: 'product-details.component.html'
})
export class ProductDetailsComponent {

    @Input('product') item: Product;
    @Output() changeQuantity: EventEmitter<Number>;

    viewMore: boolean = false;
    viewText: string = 'more';

    currency:string = '£';
    // amount: number = 10;
    quantity:number = 0;

    constructor() {
        console.log('Hello ProductDetailsComponent Component ');
        // console.log(this.product.description);
        this.changeQuantity = new EventEmitter<Number>();
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
        this.quantity = q+1;
        // this.item.quantity = this.quantity;
        this.changeQuantity.emit(this.quantity);
    }

    removeQuantity(q:number){
        if(q>0){
            this.quantity = q-1;
            // this.item.quantity = this.quantity;
            this.changeQuantity.emit(this.quantity);
        }
    }

}
