import { ListEffects } from './list.effects';
import { ListReducer } from './list.reducer';
import { ListState } from './list-state';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

const reducers: ActionReducerMap<ListState> = {
  list: ListReducer
}

@NgModule({
  providers: [],
    imports: [
      StoreModule.forFeature(
        'list', reducers),
      EffectsModule.forFeature(
          [ListEffects]),
      CommonModule,
    RouterModule.forChild([{
      path: '',
      pathMatch: 'full',
      component: ListComponent
    }])
  ],
  declarations: [ListComponent]
})
export class ListModule { }
