import { SharedModule } from '../../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { EditEffects } from './edit.effects';
import { EditReducer } from './edit.reducer';
import { EditState } from './edit-state';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit.component';
import { ActionReducerMap, StoreModule } from '@ngrx/store';

const reducers: ActionReducerMap<EditState> = {
  form: EditReducer
}
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature('edit', reducers),
    EffectsModule.forFeature([EditEffects]),
    RouterModule.forChild([{
      path: '',
      pathMatch: 'full',
      component: EditComponent
    }])
  ],
  declarations: [EditComponent]
})
export class EditModule { }
