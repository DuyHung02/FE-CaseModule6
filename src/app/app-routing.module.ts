import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeIndexComponent} from "./home-index/home-index.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./account/login/login.component";
import {AfterRegisterComponent} from "./account/after-register/after-register.component";
import {RegisterComponent} from "./account/register/register.component";
import {PlaylistShowComponent} from "./playlist/playlist-show/playlist-show.component";
import {DetailComponent} from "./detail/detail.component";
import {PlaylistCreateComponent} from "./playlist/playlist-create/playlist-create.component";
import {PlaylistDeleteComponent} from "./playlist/playlist-delete/playlist-delete.component";
import {PlaylistEditComponent} from "./playlist/playlist-edit/playlist-edit.component";
import {CreateSingerComponent} from "./singer/create-singer/create-singer.component";
import {ShowSingerComponent} from "./singer/show-singer/show-singer.component";
import {CheckPasswordComponent} from "./account/check-password/check-password.component";
import {ChangePasswordComponent} from "./account/change-password/change-password.component";
import {TopMostListensComponent} from "./play-music/playMusic/top-most-listens/top-most-listens.component";
import {ProfileComponent} from "./account/profile/profile.component";

const routes: Routes = [
  {path: '', component: HomeIndexComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'afterRegister', component: AfterRegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'topMost', component: TopMostListensComponent},
  {path: 'createSinger', component: CreateSingerComponent},
  {path: 'showSinger', component: ShowSingerComponent},
  {path: 'playlists', component: PlaylistShowComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: 'playlistCreate', component: PlaylistCreateComponent},
  {path: 'playlistDelete/:id', component: PlaylistDeleteComponent},
  {path: 'playlistEdit/:id', component: PlaylistEditComponent},
  {path: 'checkPassword', component: CheckPasswordComponent},
  {path: 'changePassword', component: ChangePasswordComponent},
  {path: 'profile', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
