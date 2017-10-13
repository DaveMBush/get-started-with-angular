import { AppState } from '../../app-state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Errors from '../../shared/errors/errors.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
  }

  start(): void {
    this.store.dispatch(
      new Errors.Add('Here is an error'));
  }
}
