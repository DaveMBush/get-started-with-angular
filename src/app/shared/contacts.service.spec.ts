import { ErrorsReducer } from './errors/errors.reducer';
import { WaitReducer } from './wait/wait.reducer';
import { SharedState } from './shared-state';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';

import { ContactsService } from './contacts.service';

const reducers: ActionReducerMap<SharedState> = {
  wait: WaitReducer,
  errors: ErrorsReducer
}

describe('ContactsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature('shared', reducers)
      ],
      providers: [ContactsService]
    });
  });

  it('should be created', inject([ContactsService], (service: ContactsService) => {
    expect(service).toBeTruthy();
  }));
});
