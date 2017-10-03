import { Component } from '@angular/core';
import {Product} from "../../interfaces/product.interface";
import {ModalController} from "ionic-angular";

@Component({
  selector: 'app-all-items',
  templateUrl: 'view-all-items.component.html'
})
export class ViewAllItemsComponent {

    Products = [
        {
            id: 1,
            name: 'Nine Inch Nails Live',
            image_path: './assets/banner/menu-item',
            image_name: 'food1.png',
            price: 10,
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n' +
            '            Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,\n' +
            '            when an unknown printer took a galley of type and scrambled it to make a type\n' +
            '            specimen book. It has survived not only five centuries, but also the leap into\n' +
            '            electronic typesetting, remaining essentially unchanged. It was popularised in\n' +
            '            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,\n' +
            '            and more recently with desktop publishing software like Aldus PageMaker including\n' +
            '            versions of Lorem Ipsum.'
        },
        {
            id: 2,
            name: 'Nine Inch Nails Live',
            image_path: './assets/banner/menu-item',
            image_name: 'food2.png',
            price: 15,
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n' +
            '            Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,\n' +
            '            when an unknown printer took a galley of type and scrambled it to make a type\n' +
            '            specimen book. It has survived not only five centuries, but also the leap into\n' +
            '            electronic typesetting, remaining essentially unchanged. It was popularised in\n' +
            '            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,\n' +
            '            and more recently with desktop publishing software like Aldus PageMaker including\n' +
            '            versions of Lorem Ipsum.'
        },
        {
            id: 3,
            name: 'Nine Inch Nails Live',
            image_path: './assets/banner/menu-item',
            image_name: 'food3.png',
            price: 25,
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n' +
            '            Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,\n' +
            '            when an unknown printer took a galley of type and scrambled it to make a type\n' +
            '            specimen book. It has survived not only five centuries, but also the leap into\n' +
            '            electronic typesetting, remaining essentially unchanged. It was popularised in\n' +
            '            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,\n' +
            '            and more recently with desktop publishing software like Aldus PageMaker including\n' +
            '            versions of Lorem Ipsum.'
        },
        {
            id: 4,
            name: 'Nine Inch Nails Live',
            image_path: './assets/banner/menu-item',
            image_name: 'food3.png',
            price: 25,
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n' +
            '            Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,\n' +
            '            when an unknown printer took a galley of type and scrambled it to make a type\n' +
            '            specimen book. It has survived not only five centuries, but also the leap into\n' +
            '            electronic typesetting, remaining essentially unchanged. It was popularised in\n' +
            '            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,\n' +
            '            and more recently with desktop publishing software like Aldus PageMaker including\n' +
            '            versions of Lorem Ipsum.'
        },
        {
            id: 5,
            name: 'Nine Inch Nails Live',
            image_path: './assets/banner/menu-item',
            image_name: 'food3.png',
            price: 25,
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n' +
            '            Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,\n' +
            '            when an unknown printer took a galley of type and scrambled it to make a type\n' +
            '            specimen book. It has survived not only five centuries, but also the leap into\n' +
            '            electronic typesetting, remaining essentially unchanged. It was popularised in\n' +
            '            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,\n' +
            '            and more recently with desktop publishing software like Aldus PageMaker including\n' +
            '            versions of Lorem Ipsum.'
        },
        {
            id: 6,
            name: 'Nine Inch Nails Live',
            image_path: './assets/banner/menu-item',
            image_name: 'food3.png',
            price: 25,
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n' +
            '            Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,\n' +
            '            when an unknown printer took a galley of type and scrambled it to make a type\n' +
            '            specimen book. It has survived not only five centuries, but also the leap into\n' +
            '            electronic typesetting, remaining essentially unchanged. It was popularised in\n' +
            '            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,\n' +
            '            and more recently with desktop publishing software like Aldus PageMaker including\n' +
            '            versions of Lorem Ipsum.'
        },
        {
            id: 7,
            name: 'Nine Inch Nails Live',
            image_path: './assets/banner/menu-item',
            image_name: 'food2.png',
            price: 15,
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n' +
            '            Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,\n' +
            '            when an unknown printer took a galley of type and scrambled it to make a type\n' +
            '            specimen book. It has survived not only five centuries, but also the leap into\n' +
            '            electronic typesetting, remaining essentially unchanged. It was popularised in\n' +
            '            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,\n' +
            '            and more recently with desktop publishing software like Aldus PageMaker including\n' +
            '            versions of Lorem Ipsum.'
        }]

  constructor(private modalCtrl: ModalController) {
    console.log('Hello ViewAllItemsComponent Component');
  }

    presentProductDetails(product: Product) {
        let productDetailsModal = this.modalCtrl.create('ProductDetailsPage', {item: product});
        productDetailsModal.present();
        // this.navCtrl.push('ProductDetailsPage', { img: 'food1.png', name: 'Nine Inch Nails Live' });
    }


}
