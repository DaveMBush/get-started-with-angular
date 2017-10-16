import { AppState } from '../../app-state';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Errors from './errors.actions';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush  
})
export class ErrorsComponent implements OnInit {
  @Input() data: ReadonlyArray<string> = [];

  constructor(
    private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  clear(): void {
    this.store.dispatch(
        new Errors.Clear()
    );
  }
}
