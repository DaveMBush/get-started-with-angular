import { EditService } from './edit.service';
import { FormGroup } from '@angular/forms';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import 'rxjs/add/operator/first';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [EditService]
})
export class EditComponent implements OnInit, OnDestroy {
  get form(): FormGroup {
    return this.editService.form;
  }

  constructor(private editService: EditService) {
  }

  ngOnInit(): void {
      this.editService.ngOnInit();
  }

  public ngOnDestroy(): void {
    this.editService.ngOnDestroy();
  }

  save(): void {
    this.editService.save();
  }

  cancel(): void {
    this.editService.cancel();
  }

}
