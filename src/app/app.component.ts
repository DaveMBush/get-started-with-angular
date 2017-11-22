import { AppState } from './app-state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  wait: Observable<number>;
  errors: Observable<ReadonlyArray<string>>;

  constructor(store: Store<AppState>) {
    this.wait = store.select((x: AppState) => x.shared.wait);
    this.errors = store.select((x: AppState) => x.shared.errors);
  }
}
