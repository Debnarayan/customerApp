import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-product-details',
    templateUrl: 'product-details.component.html'
})
export class ProductDetailsComponent {

    @Input('imageName') img: string;
    viewMore: boolean = false;
    viewText: string = 'more';

    text: string;

    constructor() {
        console.log('Hello ProductDetailsComponent Component ');
        this.text = 'Hello World';
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

}
