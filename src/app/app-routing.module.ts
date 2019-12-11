import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HollywoodComponent } from './hollywood/hollywood.component';
import { HwoodEditComponent } from './hollywood/hwood-edit/hwood-edit.component';
import { HwoodDetailComponent } from './hollywood/hwood-detail/hwood-detail.component';

const app_Routes: Routes = [
  { path: '', redirectTo: '/hollywood', pathMatch: 'full' },
  {
    path: 'hollywood', component: HollywoodComponent,
    children:
      [
        { path: 'new', component: HwoodEditComponent },
        { path: ':id', component: HwoodDetailComponent },
        { path: ':id/edit', component: HwoodEditComponent }
      ]
  },
]


@NgModule({
  imports: [RouterModule.forRoot(app_Routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
