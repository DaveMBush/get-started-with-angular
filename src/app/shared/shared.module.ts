import { FormsModule } from '@angular/forms';
import { ErrorsReducer } from './errors/errors.reducer';
import { WaitEffects } from './wait/wait.effects';
import { EffectsModule } from '@ngrx/effects';
import { WaitReducer } from './wait/wait.recuder';
import { SharedState } from './shared-state';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaitComponent } from './wait/wait.component';
import { ErrorsComponent } from './errors/errors.component';
import { ContactsService } from './contacts.service';
import { TextInputComponent } from './text-input/text-input.component';
const reducers:
  ActionReducerMap<SharedState> = {
    wait: WaitReducer,
    errors: ErrorsReducer
  }

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('shared',
      reducers),
    EffectsModule.forFeature([WaitEffects])
  ],
  providers: [ContactsService],
  declarations: [WaitComponent, ErrorsComponent, TextInputComponent],
  exports: [WaitComponent, ErrorsComponent, TextInputComponent]
})
export class SharedModule {}
