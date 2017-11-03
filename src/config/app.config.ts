import {Injectable} from "@angular/core";
import {DatabaseConfig} from "./database.config";

@Injectable()
export class AppConfig {

    constructor(dbConfig: DatabaseConfig) {
        // dbConfig;
    }

    public get APP_ID(): string {
        return "8358a413eaf73ed74c998b8a083871af";
    }


}