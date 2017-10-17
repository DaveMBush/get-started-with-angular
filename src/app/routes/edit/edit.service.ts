import { ActivatedRoute, Router } from '@angular/router';
import { AppState } from '../../app-state';
import { EditForm } from './edit-form';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Rx';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import * as Edit from './edit.actions';


@Injectable()
export class EditService implements OnInit, OnDestroy {
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
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router) {
      this.form = this.formBuilder.group({
        id: ['', Validators.nullValidator],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        dateOfBirth: ['',
        Validators.compose(
          [ Validators.required,
            EditService.isDate]
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
    this.editEntity.subscribe((x: EditForm) =>
      this.form.patchValue(x, {emitEvent: false}));
        this.route.params.first()
        .subscribe((params: Map<string, string>) => {
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

  save(): void {
    this.store.dispatch(new Edit.Save());
  }

  cancel(): void {
    this.router.navigate(['/list']);
  }
}
