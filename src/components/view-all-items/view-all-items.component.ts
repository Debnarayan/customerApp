import {Component, Input} from '@angular/core';
import {Category, Product} from "../../interfaces/product.interface";
import {ModalController, NavParams} from "ionic-angular";
import {ProductsMockupService} from "../../services/mocks/products-mockup/products-mockup.service";
import {LoadingService} from "../../providers/loading/loading.service";

@Component({
  selector: 'app-all-items',
  templateUrl: 'view-all-items.component.html'
})
export class ViewAllItemsComponent {
    selectedProductCategory: Category;
    // Products = [
    //     {
    //         id: 1,
    //         name: 'Nine Inch Nails Live',
    //         image_path: './assets/banner/menu-item',
    //         image_name: 'food1.png',
    //         price: 10,
    //         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n' +
    //         '            Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,\n' +
    //         '            when an unknown printer took a galley of type and scrambled it to make a type\n' +
    //         '            specimen book. It has survived not only five centuries, but also the leap into\n' +
    //         '            electronic typesetting, remaining essentially unchanged. It was popularised in\n' +
    //         '            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,\n' +
    //         '            and more recently with desktop publishing software like Aldus PageMaker including\n' +
    //         '            versions of Lorem Ipsum.'
    //     },
    //     {
    //         id: 2,
    //         name: 'Nine Inch Nails Live',
    //         image_path: './assets/banner/menu-item',
    //         image_name: 'food2.png',
    //         price: 15,
    //         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n' +
    //         '            Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,\n' +
    //         '            when an unknown printer took a galley of type and scrambled it to make a type\n' +
    //         '            specimen book. It has survived not only five centuries, but also the leap into\n' +
    //         '            electronic typesetting, remaining essentially unchanged. It was popularised in\n' +
    //         '            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,\n' +
    //         '            and more recently with desktop publishing software like Aldus PageMaker including\n' +
    //         '            versions of Lorem Ipsum.'
    //     },
    //     {
    //         id: 3,
    //         name: 'Nine Inch Nails Live',
    //         image_path: './assets/banner/menu-item',
    //         image_name: 'food3.png',
    //         price: 25,
    //         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n' +
    //         '            Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,\n' +
    //         '            when an unknown printer took a galley of type and scrambled it to make a type\n' +
    //         '            specimen book. It has survived not only five centuries, but also the leap into\n' +
    //         '            electronic typesetting, remaining essentially unchanged. It was popularised in\n' +
    //         '            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,\n' +
    //         '            and more recently with desktop publishing software like Aldus PageMaker including\n' +
    //         '            versions of Lorem Ipsum.'
    //     },
    //     {
    //         id: 4,
    //         name: 'Nine Inch Nails Live',
    //         image_path: './assets/banner/menu-item',
    //         image_name: 'food3.png',
    //         price: 25,
    //         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n' +
    //         '            Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,\n' +
    //         '            when an unknown printer took a galley of type and scrambled it to make a type\n' +
    //         '            specimen book. It has survived not only five centuries, but also the leap into\n' +
    //         '            electronic typesetting, remaining essentially unchanged. It was popularised in\n' +
    //         '            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,\n' +
    //         '            and more recently with desktop publishing software like Aldus PageMaker including\n' +
    //         '            versions of Lorem Ipsum.'
    //     },
    //     {
    //         id: 5,
    //         name: 'Nine Inch Nails Live',
    //         image_path: './assets/banner/menu-item',
    //         image_name: 'food3.png',
    //         price: 25,
    //         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n' +
    //         '            Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,\n' +
    //         '            when an unknown printer took a galley of type and scrambled it to make a type\n' +
    //         '            specimen book. It has survived not only five centuries, but also the leap into\n' +
    //         '            electronic typesetting, remaining essentially unchanged. It was popularised in\n' +
    //         '            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,\n' +
    //         '            and more recently with desktop publishing software like Aldus PageMaker including\n' +
    //         '            versions of Lorem Ipsum.'
    //     },
    //     {
    //         id: 6,
    //         name: 'Nine Inch Nails Live',
    //         image_path: './assets/banner/menu-item',
    //         image_name: 'food3.png',
    //         price: 25,
    //         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n' +
    //         '            Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,\n' +
    //         '            when an unknown printer took a galley of type and scrambled it to make a type\n' +
    //         '            specimen book. It has survived not only five centuries, but also the leap into\n' +
    //         '            electronic typesetting, remaining essentially unchanged. It was popularised in\n' +
    //         '            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,\n' +
    //         '            and more recently with desktop publishing software like Aldus PageMaker including\n' +
    //         '            versions of Lorem Ipsum.'
    //     },
    //     {
    //         id: 7,
    //         name: 'Nine Inch Nails Live',
    //         image_path: './assets/banner/menu-item',
    //         image_name: 'food2.png',
    //         price: 15,
    //         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n' +
    //         '            Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,\n' +
    //         '            when an unknown printer took a galley of type and scrambled it to make a type\n' +
    //         '            specimen book. It has survived not only five centuries, but also the leap into\n' +
    //         '            electronic typesetting, remaining essentially unchanged. It was popularised in\n' +
    //         '            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,\n' +
    //         '            and more recently with desktop publishing software like Aldus PageMaker including\n' +
    //         '            versions of Lorem Ipsum.'
    //     }
    //     ]
    Products: Product[];

  constructor(private modalCtrl: ModalController,
              private navParams: NavParams,
              private productService: ProductsMockupService,
              private loading: LoadingService) {
    console.log('Hello ViewAllItemsComponent Component');
    this.selectedProductCategory = navParams.get('category');
    console.log(this.selectedProductCategory);
    this.loading.presentLoading();
      this.productService.getProductsByCategory(this.selectedProductCategory)
          .subscribe(products=>{
              this.Products = products.response;
              console.log(this.Products);
              this.loading.dismissLoading();
          },error=>{
              this.loading.dismissLoading();
              alert('Unable to get all products' + error);
          });
  }

    presentProductDetails(product: Product) {
        let productDetailsModal = this.modalCtrl.create('ProductDetailsPage', {item: product});
        productDetailsModal.present();
        // this.navCtrl.push('ProductDetailsPage', { img: 'food1.png', name: 'Nine Inch Nails Live' });
    }


}
