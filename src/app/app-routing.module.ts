import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateComponent} from "./song/create/create.component";
import {CreateSingerComponent} from "./singer/create-singer/create-singer.component";
import {CreateSingerSongComponent} from "./singerSong/create-singer-song/create-singer-song.component";
import {FindSingerNameComponent} from "./singer/find-singer-name/find-singer-name.component";
import {RegisterComponent} from "./account/register/register.component";
import {LoginComponent} from "./account/login/login.component";
import {ProfileComponent} from "./account/profile/profile.component";
import {ProfileEditComponent} from "./account/profile-edit/profile-edit.component";
import {ChangePasswordComponent} from "./account/change-password/change-password.component";
import {CheckAccountComponent} from "./account/check-account/check-account.component";
import {BodyComponent} from "./home/body/body.component";
import {ShowSingerComponent} from "./singer/show-singer/show-singer.component";
import {ShowDetailSingerComponent} from "./singer/show-detail-singer/show-detail-singer.component";
import {
  ShowCreateSongByAccountComponent
} from "./song/show-create-song-by-account/show-create-song-by-account.component";
import {EditSongComponent} from "./song/edit-song/edit-song.component";

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'profile/:id', component: ProfileEditComponent},
  {path: 'password', component: ChangePasswordComponent},
  {path: 'password/:id', component: CheckAccountComponent},
  {path: '', component: BodyComponent},
  {path:'createSong',component: CreateComponent},
  {path:'createSinger',component: CreateSingerComponent},
  {path:'createSingerSong/:id',component: CreateSingerSongComponent},
  {path:'findSinger',component: FindSingerNameComponent},
  {path:'showSinger',component: ShowSingerComponent},
  {path:'showDetailSinger/:id',component: ShowDetailSingerComponent},
  {path:'showCreateSongByAccount',component: ShowCreateSongByAccountComponent},
  {path:'editSong/:id',component: EditSongComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
