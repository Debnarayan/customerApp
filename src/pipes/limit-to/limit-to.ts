import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitTo',
})
export class LimitToPipe implements PipeTransform {

  transform(value: number, limit) {
      var secure_card_number='';
      for(let i=0;i<value.toString().length;i++){
          if(value.toString().length-i>limit){
              secure_card_number=secure_card_number+'X';
          }else{
              secure_card_number = secure_card_number + value.toString().charAt(i);
          }
      }
      return secure_card_number;
  }
}
