import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  form: FormGroup;

  static isDate(c: FormControl): object {
    if (!c.value.match(
      /^\d{1,2}\/\d{1,2}\/(\d{2}|\d{4})$/)) {
      return { invalidDate: true };
    }
  }

  constructor(private formBuilder: FormBuilder) {
      this.form = this.formBuilder.group(
        {
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          dateOfBirth: ['', Validators.compose([
            Validators.required,
            EditComponent.isDate])
          ]
        }
      )
  }

  ngOnInit(): void {
  }

}
