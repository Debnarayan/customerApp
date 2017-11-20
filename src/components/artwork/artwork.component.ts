import {Component, EventEmitter, Output} from '@angular/core';
import {Category} from "../../interfaces/product.interface";
import {ModalController, NavController, NavParams, ViewController} from "ionic-angular";
import {GiftCardMockupService} from "../../services/mocks/gift-card-mockup/gift-card-mockup.service";
import {AlertService} from "../../providers/alert/alert.service";
import {Artwork, ArtworkCategory} from "../../interfaces/artwork.interface";
import {GlobalConfig} from "../../config/global.config";

@Component({
    selector: 'app-artwork',
    templateUrl: 'artwork.component.html'
})
export class ArtworkComponent{

    @Output() artworkResponse: EventEmitter<Object>;
    ArtworkCategories: ArtworkCategory;
    Artworks: Artwork[];

    selectedArtwork:Artwork;

    constructor(private navParams: NavParams,
                private modalCtrl:ModalController,
                private alertService: AlertService,
                private global: GlobalConfig,
                private giftcardMockup: GiftCardMockupService) {
        console.log('Hello ArtworkComponent Component');
        this.artworkResponse = new EventEmitter<Object>();
        this.selectedArtwork = navParams.get('artwork');
        this.giftcardMockup.getArtworkCategories()
            .subscribe((artworkCategory)=>{
                if(artworkCategory.status == 'success'){
                    this.ArtworkCategories = artworkCategory.response;
                    console.log(this.ArtworkCategories);
                    this.giftcardMockup.getArtworkImages()
                        .subscribe((artworkImage)=>{
                            if(artworkImage.status == 'success'){
                                this.Artworks = artworkImage.response;
                                console.log(this.Artworks);
                            }else{
                                this.alertService.commonAlert(artworkImage.status,artworkImage.response);
                            }
                        })
                }else{
                    this.alertService.commonAlert(artworkCategory.status,artworkCategory.response);
                }
            })
    }

    selectArtwork(artwork){
        this.selectedArtwork = artwork;
        this.artworkResponse.emit(this.selectedArtwork);
    }

    goToViewAllArtworks(artworkCategory: Category) {
        let allArtworkModal = this.modalCtrl.create('ViewAllArtworksPage', {artwork_category: artworkCategory});
        allArtworkModal.present();

        allArtworkModal.onDidDismiss(data => {
            console.log(data);
            this.selectedArtwork = data;
            this.artworkResponse.emit(this.selectedArtwork);
        });
    }

}
