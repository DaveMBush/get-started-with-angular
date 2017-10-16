import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileNotFoundComponent } from './file-not-found.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      pathMatch: 'full',
      component: FileNotFoundComponent
    }])
  ],
  declarations: [FileNotFoundComponent]
})
export class FileNotFoundModule { }
