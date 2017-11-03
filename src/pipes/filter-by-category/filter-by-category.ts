import { Pipe, PipeTransform } from '@angular/core';
import {ArtworkCategory} from "../../interfaces/artwork.interface";

@Pipe({
  name: 'filterByCategory',
})
export class FilterByCategoryPipe implements PipeTransform {
    transform(items: Array<any>, category:ArtworkCategory): Array<any> {
        return items.filter(item => item.category_id === category.id);
    }
}
