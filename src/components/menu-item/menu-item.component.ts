import {Component} from '@angular/core';
import {ModalController, NavController} from "ionic-angular";
import {Category, Product} from "../../interfaces/product.interface";
import {ProductsMockupService} from "../../services/mocks/products-mockup/products-mockup.service";

@Component({
    selector: 'app-menu-item',
    templateUrl: 'menu-item.component.html'
})
export class MenuItemComponent {

    Categories: Array<Category>;
    Products: Array<Product>;

    constructor(private navCtrl: NavController,
                private modalCtrl: ModalController,
                private productService: ProductsMockupService) {
        console.log('Hello AllItemComponent Component');
        this.productService.getProductCategories()
            .then(categories=>{
                this.Categories = categories;
                this.productService.getAllProducts()
                    .then(products=>{
                        this.Products = products;
                    })
            }).catch(err=>{
            alert("An unexpected error occured"+err);
        })

    }

    presentProductDetails(product: Product) {
        let productDetailsModal = this.modalCtrl.create('ProductDetailsPage', {item: product});
        productDetailsModal.present();
        // this.navCtrl.push('ProductDetailsPage', { img: 'food1.png', name: 'Nine Inch Nails Live' });
    }

    goToViewAllItems(menuItemCategory: Category){
        this.navCtrl.push('ViewAllItemsPage',{category: menuItemCategory});
    }
}
