import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BodyComponent} from "./home/body/body.component";
import {UserProfileComponent} from "./profile/user-profile/user-profile.component";

const routes: Routes = [

  {path: 'home', component: BodyComponent},
  {path: 'userProfile', component: UserProfileComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
