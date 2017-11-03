import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Category} from "../../interfaces/product.interface";
import {ArtworkCategory} from "../../interfaces/artwork.interface";


@Component({
  selector: 'app-all-artworks',
  templateUrl: 'view-all-artworks.component.html'
})
export class ViewAllArtworksComponent {
    @Input('selectedCategory') selectedCategory: ArtworkCategory;
    @Output() allArtworkResponse: EventEmitter<Object>;
    selectedArtwork:Object;

    Artworks = [
        {
            id: 1,
            category_id:1,
            tag: ['happy birthday', 'happy', 'birthday', 'wish'],
            image_name: 'art1.jpg',
            image_path: './assets/banner/artwork'
        },
        {
            id: 2,
            category_id:1,
            tag: ['happy birthday', 'happy', 'birthday', 'wish'],
            image_name: 'art2.jpg',
            image_path: './assets/banner/artwork'
        },
        {
            id: 3,
            category_id:1,
            tag: ['happy birthday', 'happy', 'birthday', 'wish'],
            image_name: 'art3.jpg',
            image_path: './assets/banner/artwork'
        },
        {
            id: 4,
            category_id:2,
            tag: ['art', 'scenary', 'color', 'nature', 'pet', 'dog', 'street', 'draw'],
            image_name: 'art4.jpg',
            image_path: './assets/banner/artwork'
        },
        {
            id: 5,
            category_id:3,
            tag: ['cartoon', 'batman', 'hero'],
            image_name: 'art5.jpg',
            image_path: './assets/banner/artwork'
        },
        {
            id: 6,
            category_id:3,
            tag: ['cartoon', 'dbz', 'hero','goku'],
            image_name: 'art6.jpg',
            image_path: './assets/banner/artwork'
        },
        {
            id: 7,
            category_id:3,
            tag: ['cartoon', 'dbz', 'hero','goku'],
            image_name: 'art7.jpg',
            image_path: './assets/banner/artwork'
        }];
  constructor() {
    console.log('Hello ViewAllArtworksComponent Component');
      this.allArtworkResponse = new EventEmitter<Object>();
      this.selectedArtwork = {};
  }

    selectArtwork(artwork){
        this.selectedArtwork = artwork;
        this.allArtworkResponse.emit(this.selectedArtwork);
    }


}
