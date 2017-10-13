import { Observable } from 'rxjs/Rx';
import { AppState } from '../../app-state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Wait from '../../shared/wait/wait.actions';

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
    this.store.dispatch(new Wait.Start());
    Observable.timer(4000)
      .take(1)
      .subscribe((): void =>
        this.store.dispatch(new Wait.End()))
  }
}
