import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  redirectTo: 'list',
  pathMatch: 'full'
}, {
  path: 'list',
  loadChildren:
    './routes/list/list.module#ListModule'
}, {
  path: 'edit/:id',
  loadChildren:
    './routes/edit/edit.module#EditModule'
}, {
  path: 'add',
  loadChildren: './routes/edit/edit.module#EditModule'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
