import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./account/register/register.component";
import {HomeIndexComponent} from "./home/home-index/home-index/home-index.component";

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: '', component: HomeIndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
