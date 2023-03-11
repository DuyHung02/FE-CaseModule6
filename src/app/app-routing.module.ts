import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./account/register/register.component";
import {HomeIndexComponent} from "./home/home-index/home-index/home-index.component";
import {LoginComponent} from "./account/login/login.component";
import {ProfileComponent} from "./account/profile/profile.component";
import {ProfileEditComponent} from "./account/profile-edit/profile-edit.component";
import {ChangePasswordComponent} from "./account/change-password/change-password.component";
import {CheckAccountComponent} from "./account/check-account/check-account.component";

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'profile/: id', component: ProfileEditComponent},
  {path: 'password', component: ChangePasswordComponent},
  {path: 'password/: id', component: CheckAccountComponent},
  {path: '', component: HomeIndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
