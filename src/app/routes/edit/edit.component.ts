import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../app-state';
import { EditForm } from './edit-form';
import { Subscription } from 'rxjs/Subscription';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/add/operator/first';
import * as Edit from './edit.actions';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {
  form: FormGroup;
  formSubscription: Subscription;
  editEntitySubscription: Subscription;
  editEntity: Store<EditForm>;
  static isDate(c: FormControl): object {
    if (!c.value.match(
      /^\d{1,2}\/\d{1,2}\/(\d{2}|\d{4})$/)) {
      return { invalidDate: true };
    }
  }

  constructor(
    private store: Store<AppState>,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) {
      this.form = this.formBuilder.group(
        {
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          dateOfBirth: ['', Validators.compose([
            Validators.required,
            EditComponent.isDate])
          ]
        }
      );
      this.editEntity = this.store.select((x: AppState) => x.edit.form);

  }

  ngOnInit(): void {
      this.formSubscription =
        this.form.valueChanges.subscribe(
          (x: EditForm) =>
          this.store.dispatch(new Edit.Update(x)));
      this.editEntitySubscription =
        this.editEntity.subscribe(
          (x: EditForm) =>
            this.form.patchValue(
              x, { emitEvent: false }));
  this
    .route.params.first()
    .subscribe(
      (params: Map<string, string>) => {
          this.store.dispatch(
            new Edit.Get(parseInt(
                params['id'] ?
              params['id'] : '-1', 10)));
      });
  }

  public ngOnDestroy(): void {
    this.formSubscription.unsubscribe();
    this.editEntitySubscription.unsubscribe();
  }

}
