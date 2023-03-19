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
import {CreateSingerComponent} from "./singer/create-singer/create-singer.component";
import {ShowSingerComponent} from "./singer/show-singer/show-singer.component";
import {CreateSong2Component} from "./song/create-song2/create-song2.component";
import {CreateSingerSongComponent} from "./singerSong/create-singer-song/create-singer-song.component";
import {CheckPasswordComponent} from "./account/check-password/check-password.component";
import {ChangePasswordComponent} from "./account/change-password/change-password.component";
import {TopMostListensComponent} from "./play-music/playMusic/top-most-listens/top-most-listens.component";

const routes: Routes = [
  {path: '', component: HomeIndexComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'afterRegister', component: AfterRegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'topMost', component: TopMostListensComponent},
  {path: 'createSinger', component: CreateSingerComponent},
  {path: 'showSinger', component: ShowSingerComponent},
  {path: 'createSong', component: CreateSong2Component},
  {path:'createSingerSong/:id',component: CreateSingerSongComponent},
  {path: 'playlists', component: PlaylistShowComponent},
  {path: 'playlistDetail/:id', component: PlaylistDetailComponent},
  {path: 'playlistCreate', component: PlaylistCreateComponent},
  {path: 'playlistDelete/:id', component: PlaylistDeleteComponent},
  {path: 'playlistEdit/:id', component: PlaylistEditComponent},
  {path: 'checkPassword', component: CheckPasswordComponent},
  {path: 'changePassword', component: ChangePasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
