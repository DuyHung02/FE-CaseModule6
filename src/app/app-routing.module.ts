import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeIndexComponent} from "./home-index/home-index.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./account/login/login.component";
import {AfterRegisterComponent} from "./account/after-register/after-register.component";
import {RegisterComponent} from "./account/register/register.component";
import {TopMostListensComponent} from "./play-music/playMusic/top-most-listens/top-most-listens.component";

const routes: Routes = [
  {path: '', component: HomeIndexComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'afterRegister', component: AfterRegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'topMost', component: TopMostListensComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
