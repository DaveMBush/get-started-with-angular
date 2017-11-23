import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../app-state';
import { Contact } from '../../shared/contact';
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

  constructor(private store: Store<AppState>,
    private router: Router) {
    this.contacts = store.select(
        (x: AppState) => x.list.list);
   }

  ngOnInit(): void {
    this.store.dispatch(new List.List());
  }

  delete(id: number): void {
    this.store.dispatch(new List.Delete(id));
  }

  edit(id: number): void {
    this.router.navigate(['/edit', id]);
  }

  add(): void {
    this.router.navigate(['/add']);
  }

}
