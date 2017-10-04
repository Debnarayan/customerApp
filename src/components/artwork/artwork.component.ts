import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-artwork',
    templateUrl: 'artwork.component.html'
})
export class ArtworkComponent {

    @Output() artworkResponse: EventEmitter<Object>;

    ArtworkCategories = [
        {
            id: 1,
            name: 'Birthday'
        },
        {
            id: 2,
            name: 'Thank You'
        },
        {
            id: 3,
            name: 'Cartoon'
        }];

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

    selectedArtwork:Object;

    constructor() {
        console.log('Hello ArtworkComponent Component');
        this.artworkResponse = new EventEmitter<Object>();
        this.selectedArtwork = this.Artworks[0];
    }

    selectArtwork(artwork){
        this.selectedArtwork = artwork;
        this.artworkResponse.emit(this.selectedArtwork);
    }

}
