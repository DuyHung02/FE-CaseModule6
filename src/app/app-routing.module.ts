import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeIndexComponent} from "./home-index/home-index.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./account/login/login.component";
import {AfterRegisterComponent} from "./account/after-register/after-register.component";
import {RegisterComponent} from "./account/register/register.component";
import {PlaylistShowComponent} from "./playlist/playlist-show/playlist-show.component";
import {PlaylistDetailComponent} from "./playlist/playlist-detail/playlist-detail.component";
import {PlaylistCreateComponent} from "./playlist/playlist-create/playlist-create.component";
import {PlaylistDeleteComponent} from "./playlist/playlist-delete/playlist-delete.component";
import {PlaylistEditComponent} from "./playlist/playlist-edit/playlist-edit.component";

const routes: Routes = [
  {path: '', component: HomeIndexComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'afterRegister', component: AfterRegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'playlists', component: PlaylistShowComponent},
  {path: 'playlistDetail/:id', component: PlaylistDetailComponent},
  {path: 'playlistCreate', component: PlaylistCreateComponent},
  {path: 'playlistDelete/:id', component: PlaylistDeleteComponent},
  {path: 'playlistEdit/:id', component: PlaylistEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
