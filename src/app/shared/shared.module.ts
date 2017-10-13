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

const reducers: ActionReducerMap<SharedState> = {
  wait: WaitReducer,
  errors: ErrorsReducer
}

@NgModule({
imports: [
  CommonModule,
  StoreModule.forFeature('shared',
    reducers),
  EffectsModule.forFeature([WaitEffects])
],
declarations: [WaitComponent, ErrorsComponent],
exports: [WaitComponent, ErrorsComponent]
})
export class SharedModule { }
