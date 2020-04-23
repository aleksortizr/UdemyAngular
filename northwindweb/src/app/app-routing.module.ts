import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes : Routes = [
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path:'', redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
