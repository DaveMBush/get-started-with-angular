import { WaitEffects } from './wait/wait.effects';
import { EffectsModule } from '@ngrx/effects';
import { WaitReducer } from './wait/wait.recuder';
import { SharedState } from './shared-state';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaitComponent } from './wait/wait.component';

const reducers:
  ActionReducerMap<SharedState> = {
    wait: WaitReducer
  }

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('shared',
      reducers),
    EffectsModule.forFeature([WaitEffects])
  ],
  declarations: [WaitComponent],
  exports: [WaitComponent]
})
export class SharedModule {}
