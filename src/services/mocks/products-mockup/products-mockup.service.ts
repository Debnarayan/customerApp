import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Category, Product} from "../../../interfaces/product.interface";
import {AppService} from "../../app.service";
import {GlobalConfig} from "../../../config/global.config";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ProductsMockupService{

    Products: Array<Product>;
    Categories: Array<Category>;

  constructor(private appService:AppService,
              private global: GlobalConfig) {
      console.log("Product Mockup Service");

      // this.Products = [
      //     {
      //         id: 1,
      //         category_id:1,
      //         name: 'Nine Inch Nails Live',
      //         image_path: './assets/banner/menu-item/food1.png',
      //         // image_name: 'food1.png',
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
      //         category_id:3,
      //         name: 'Nine Inch Nails Live',
      //         image_path: './assets/banner/menu-item/food2.png',
      //         // image_name: 'food2.png',
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
      //         category_id:2,
      //         name: 'Nine Inch Nails Live',
      //         image_path: './assets/banner/menu-item/food3.png',
      //         // image_name: 'food3.png',
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
      //         category_id:3,
      //         name: 'Nine Inch Nails Live',
      //         image_path: './assets/banner/menu-item/food3.png',
      //         // image_name: 'food3.png',
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
      //         category_id:1,
      //         name: 'Nine Inch Nails Live',
      //         image_path: './assets/banner/menu-item/food3.png',
      //         // image_name: 'food3.png',
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
      //         category_id:2,
      //         name: 'Nine Inch Nails Live',
      //         image_path: './assets/banner/menu-item/food1.png',
      //         // image_name: 'food1.png',
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
      //         id: 7,
      //         category_id:2,
      //         name: 'Nine Inch Nails Live',
      //         image_path: './assets/banner/menu-item/food2.png',
      //         // image_name: 'food2.png',
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
      // ];

      // this.Categories = [
      //     {
      //         id:1,
      //         name:'Food'
      //     },
      //     {
      //         id:2,
      //         name:'Drinks'
      //     },
      //     {
      //         id: 3,
      //         name: 'Starter'
      //     }
      // ];
  }

  getProductCategories(){
      return this.appService.backendCallback(this.global.getCompanyId(),'secure/get_all_category')
          .map(response=>{
              return response;
          })
  }

    getLimitedProducts(limit: Number){
        return this.appService.backendCallback({company_id:this.global.getCompanyId(),venue_id:this.global.getVenueId(),limit: limit},'secure/get_limited_product')
            .map(response=>{
                return response;
            });
    }

    getProductsByCategory(category: Category){
        return this.appService.backendCallback({venue_id: this.global.getVenueId(),category_id: category.product_category_id},'secure/category_product_details')
            .map(response=>{
                return response;
            });

    }

    getProducts(){
      return this.Products;
    }

  //
  // getSelectedProductDetails(product){
  //     return this.Products.filter(item => item.id === product.id);
  // }

}
