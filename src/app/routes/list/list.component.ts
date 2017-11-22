import { AppState } from '../../app-state';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as Wait from '../../shared/wait/wait.actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  start(): void {
    this.store.dispatch(new Wait.Start());
    Observable.timer(4000)
      .take(1)
      .subscribe((): void =>
        this.store.dispatch(new Wait.End()));
  }

}
