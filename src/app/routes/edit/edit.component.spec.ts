import { EditReducer } from './edit.reducer';
import { EditState } from './edit-state';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
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
        ReactiveFormsModule
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
