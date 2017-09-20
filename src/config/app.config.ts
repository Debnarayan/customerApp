import {Injectable} from "@angular/core";

@Injectable()
export class AppConfig {

    constructor() {}

    public get APP_ID(): string {
        return "8358a413eaf73ed74c998b8a083871af";
    }

}