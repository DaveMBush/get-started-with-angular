import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '../../shared/shared.module';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EditReducer } from './edit.reducer';
import { EditState } from './edit-state';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditComponent } from './edit.component';

const reducers:
  ActionReducerMap<EditState> = {
  form: EditReducer
}

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;

  beforeEach(async(() => {
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
        }
      ],
      declarations: [ EditComponent ]
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
