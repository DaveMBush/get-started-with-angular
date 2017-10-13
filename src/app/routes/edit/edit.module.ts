import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{
      path: '',
      pathMatch: 'full',
      component: EditComponent
    }])
  ],
  declarations: [EditComponent]
})
export class EditModule { }
