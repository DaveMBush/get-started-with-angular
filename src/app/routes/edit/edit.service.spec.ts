import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '../../shared/shared.module';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EditReducer } from './edit.reducer';
import { EditState } from './edit-state';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { inject, TestBed } from '@angular/core/testing';
import { EditService } from './edit.service';

const reducers:
  ActionReducerMap<EditState> = {
    form: EditReducer
  }
describe('EditService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature('edit', reducers),
        EffectsModule.forRoot([]),
        RouterModule.forRoot([]),
        ReactiveFormsModule,
        FormsModule,
        SharedModule
      ],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: '/'
        },
        EditService
      ]
    });
  });

  it('should be created', inject([EditService], (service: EditService) => {
    expect(service).toBeTruthy();
  }));
});
