import {Injectable} from '@angular/core';
import {ToastController, Toast} from "ionic-angular";

@Injectable()
export class ToastService {

    toast: Toast;

    constructor(private toastCtrl: ToastController) {
        console.log('Hello ToastServiceProvider Provider');
    }

    async dismissToast(){
        await this.toast.onDidDismiss((toastStatus) => {
            return toastStatus;
        });
    }

    presentToast(toastMsg:string): void {
        this.toast = this.toastCtrl.create({
            message: toastMsg,
            duration: 2000,
            position: 'bottom',
            cssClass: 'toast-at-bottom',
            dismissOnPageChange: true
        });
        this.toast.present();
    }

    commonToast(toastPosition:string='bottom',toastDuration:number, toastMsg:string, dismissOnChange:boolean=false):Promise<Toast>{
        this.toast = this.toastCtrl.create({
            message: toastMsg,
            duration: toastDuration,
            position: toastPosition,
            dismissOnPageChange: dismissOnChange
        });
        return this.toast.present();
    }


}