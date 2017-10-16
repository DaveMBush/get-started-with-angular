import { FormsModule } from '@angular/forms';
import { ContactsService } from './contacts.service';
import { ErrorsReducer } from './errors/errors.reducer';
import { WaitEffects } from './wait/wait.effects';
import { WaitReducer } from './wait/wait.reducer';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaitComponent } from './wait/wait.component';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { SharedState } from './shared-state';
import { EffectsModule } from '@ngrx/effects';
import { ErrorsComponent } from './errors/errors.component';
import { TextInputComponent } from './text-input/text-input.component';

const reducers: ActionReducerMap<SharedState> = {
  wait: WaitReducer,
  errors: ErrorsReducer
}

@NgModule({
  providers: [ContactsService],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('shared',
      reducers),
    EffectsModule.forFeature([WaitEffects])
  ],
  declarations: [
    WaitComponent,
    ErrorsComponent,
    TextInputComponent
  ],
  exports: [
    WaitComponent,
    ErrorsComponent,
    TextInputComponent
  ]
})
export class SharedModule { }
