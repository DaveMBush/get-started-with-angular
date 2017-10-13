import { AppState } from '../../app-state';
import { EditForm } from './edit-form';
import { Subscription } from 'rxjs/Rx';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Edit from './edit.actions';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {
  form: FormGroup;
  formSubscription: Subscription;
  editEntity: Store<EditForm>;
  editEntitySubscription: Subscription
  static isDate(c: FormControl): object {
    if(!c.value.match(
      /^\d{1,2}\/\d{1,2}\/(\d{2}|\d{4})$/)) {
        return {invalidDate: true};
      }
  }

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>) {
      this.form = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        dateOfBirth: ['',
        Validators.compose(
          [ Validators.required,
            EditComponent.isDate]
          )
        ]
      });
      this.editEntity = this.store.select(
        (x: AppState) => x.edit.form);
  }

  ngOnInit(): void {
    this.formSubscription =
      this.form.valueChanges.subscribe(
        (x: EditForm) =>
            this.store.dispatch(new Edit.Update(x))
    );
    this.editEntitySubscription =
    this.editEntity.subscribe(
      (x: EditForm) =>
      this.form.patchValue(
        x, {emitEvent: false}));
  }

  public ngOnDestroy(): void {
    this.formSubscription.unsubscribe();
  }


}
