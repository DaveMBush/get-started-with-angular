import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { EditReducer } from './edit.reducer';
import { EditState } from './edit-state';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComponent } from './edit.component';
import { ActionReducerMap, StoreModule } from '@ngrx/store';

const reducers: ActionReducerMap<EditState> = {
  form: EditReducer
}


describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
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
        ],
      declarations: [EditComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
