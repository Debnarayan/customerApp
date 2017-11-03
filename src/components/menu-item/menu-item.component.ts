import {Component} from '@angular/core';
import {ModalController, NavController} from "ionic-angular";
import {Category, Product} from "../../interfaces/product.interface";
import {ProductsMockupService} from "../../services/mocks/products-mockup/products-mockup.service";
import {LoadingService} from "../../providers/loading/loading.service";
import {GlobalConfig} from "../../config/global.config";

@Component({
    selector: 'app-menu-item',
    templateUrl: 'menu-item.component.html'
})
export class MenuItemComponent {

    Categories: Array<Category>;
    Products: Array<Product>;

    constructor(private global: GlobalConfig,
                private navCtrl: NavController,
                private modalCtrl: ModalController,
                private productService: ProductsMockupService,
                private loading: LoadingService) {
        console.log('Hello AllItemComponent Component');
        this.loading.presentLoading();
        this.productService.getProductCategories()
            .subscribe(categories => {
                if(categories.status == 'success'){
                    this.Categories = categories.response;
                    this.productService.getLimitedProducts(3)
                        .subscribe(products => {
                            console.log(products);
                            this.loading.dismissLoading();
                            if(products.status == 'success'){
                                this.Products = products.response;
                            }else{
                                alert('Failed to get products');
                            }
                        }, error => {
                            this.loading.dismissLoading();
                            alert('Unable to get products' + error);
                        })
                }else {
                    this.loading.dismissLoading();
                    alert('Failed to get categories');
                }
            }, error => {
                this.loading.dismissLoading();
                alert('Unable to get categories' + error);
            });

    }

    presentProductDetails(product: Product) {
        let productDetailsModal = this.modalCtrl.create('ProductDetailsPage', {item: product});
        productDetailsModal.present();
        // this.navCtrl.push('ProductDetailsPage', { img: 'food1.png', name: 'Nine Inch Nails Live' });
    }

    goToViewAllItems(menuItemCategory: Category) {
        this.navCtrl.push('ViewAllItemsPage', {category: menuItemCategory});
    }
}
