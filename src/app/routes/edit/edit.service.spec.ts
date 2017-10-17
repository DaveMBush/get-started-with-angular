import { EditReducer } from './edit.reducer';
import { EditState } from './edit-state';
import { SharedModule } from '../../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { TestBed, inject } from '@angular/core/testing';

import { EditService } from './edit.service';

const reducers: ActionReducerMap<EditState> = {
  form: EditReducer
}

describe('EditService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EditService,
        {
          provide: APP_BASE_HREF,
          useValue: '/'
        }
      ],
      imports: [ReactiveFormsModule,
        FormsModule,
        RouterModule.forRoot([]),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        StoreModule.forFeature(
          'edit', reducers),
        SharedModule
        ]
    });
  });

  it('should be created', inject([EditService], (service: EditService) => {
    expect(service).toBeTruthy();
  }));
});
