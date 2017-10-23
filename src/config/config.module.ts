import {NgModule} from "@angular/core";
import {AppConfig} from "./app.config";
import {DatabaseConfig} from "./database.config";
import {SQLite} from "@ionic-native/sqlite";
import {GlobalConfig} from "./global.config";

@NgModule({
    providers:[
        SQLite,

        GlobalConfig,
        AppConfig,
        DatabaseConfig
    ]
})
export class ConfigModule {
}