import { ContactsService } from './contacts.service';
import { EffectsModule } from '@ngrx/effects';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { ListEffects } from './list.effects';
import { ListReducer } from './list.reducer';
import { ListState } from './list-state';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';

const reducers: ActionReducerMap<ListState> = {
    list: ListReducer
}

@NgModule({
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
  providers: [ContactsService],
  declarations: [ListComponent]
})
export class ListModule { }
