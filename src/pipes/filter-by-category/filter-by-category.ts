import { Pipe, PipeTransform } from '@angular/core';
import {Category} from "../../interfaces/product.interface";

@Pipe({
  name: 'filterByCategory',
})
export class FilterByCategoryPipe implements PipeTransform {
    transform(items: Array<any>, category: Category): Array<any> {
        return items.filter(item => item.category_id === category.id);
    }
}
