import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Message} from "../../../interfaces/message.interface";

@Injectable()
export class MessagesMockupService {

    Messages: Array<Message>;
    UnreadMessages: Array<Message> = [];

  constructor(public http: Http) {
      this.Messages = [
          {
              id: 1,
              title: "Exclusive offer for you",
              body: "The Loading component is an overlay that prevents user interaction while indicating activity. By default, it shows a spinner based on the mode. Dynamic content can be passed and displayed with the spinner. The spinner can be hidden or customized to use several predefined options. The loading indicator is presented on top of other content even during navigation.",
              image_path: './assets/banner/side-menu',
              image_name: 'img1.jpg',
              is_read: 'y'
          },
          {
              id: 2,
              title: "Exclusive offer for you",
              body: "The Loading component is an overlay that prevents user interaction while indicating activity. By default, it shows a spinner based on the mode. Dynamic content can be passed and displayed with the spinner. The spinner can be hidden or customized to use several predefined options. The loading indicator is presented on top of other content even during navigation.",
              image_path: './assets/banner/side-menu',
              image_name: 'img2.jpg',
              is_read: 'n'
          },
          {
              id: 3,
              title: "Exclusive offer for you",
              body: "The Loading component is an overlay that prevents user interaction while indicating activity. By default, it shows a spinner based on the mode. Dynamic content can be passed and displayed with the spinner. The spinner can be hidden or customized to use several predefined options. The loading indicator is presented on top of other content even during navigation.",
              image_path: './assets/banner/side-menu',
              image_name: 'img3.jpg',
              is_read: 'n'
          },
          {
              id: 4,
              title: "Exclusive offer for you",
              body: "The Loading component is an overlay that prevents user interaction while indicating activity. By default, it shows a spinner based on the mode. Dynamic content can be passed and displayed with the spinner. The spinner can be hidden or customized to use several predefined options. The loading indicator is presented on top of other content even during navigation.",
              image_path: './assets/banner/side-menu',
              image_name: 'img4.jpg',
              is_read: 'y'
          }]
  }

  async getAll():Promise<Array<Message>>{
      return await this.Messages;
  }

  async getAllUnreadMessages():Promise<Array<Message>>{
      for(let i=0; i<this.Messages.length; i++){
          if(this.Messages[i]['is_read'] == 'n'){
              this.UnreadMessages.push(this.Messages[i]);
          }
      }
      return await this.UnreadMessages;
  }

}
