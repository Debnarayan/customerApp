import { NgModule } from '@angular/core';
import { FilterByCategoryPipe } from './filter-by-category/filter-by-category';
import { LimitToPipe } from './limit-to/limit-to';
@NgModule({
	declarations: [FilterByCategoryPipe,
    LimitToPipe],
	imports: [],
	exports: [FilterByCategoryPipe,
    LimitToPipe]
})
export class PipesModule {}
