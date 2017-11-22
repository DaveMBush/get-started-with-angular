import { Store } from '@ngrx/store';
import { AppState } from '../../app-state';
import { Contact } from './contact';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as List from './list.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  contacts: Observable<ReadonlyArray<Contact>>;

  constructor(private store: Store<AppState>) {
    this.contacts = store.select(
        (x: AppState) => x.list.list);
   }

  ngOnInit(): void {
    this.store.dispatch(new List.List());
  }

}
