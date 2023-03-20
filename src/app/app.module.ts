import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {environment} from "../environments/environment.prod";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BodyIndexComponent} from "./home-index/body-index/body-index.component";
import {FooterComponent} from "./home-index/footer/footer.component";
import {NavComponent} from "./home-index/nav/nav.component";
import {HomeIndexComponent} from "./home-index/home-index.component";
import {HeaderComponent} from "./home-index/header/header.component";
import {RegisterComponent} from "./account/register/register.component";
import {AfterRegisterComponent} from "./account/after-register/after-register.component";
import {LoginComponent} from "./account/login/login.component";
import {HomeComponent} from "./home/home.component";
import { PlaylistShowComponent } from './playlist/playlist-show/playlist-show.component';
import { PlaylistDetailComponent } from './playlist/playlist-detail/playlist-detail.component';
import { PlaylistCreateComponent } from './playlist/playlist-create/playlist-create.component';
import { PlaylistDeleteComponent } from './playlist/playlist-delete/playlist-delete.component';
import { PlaylistEditComponent } from './playlist/playlist-edit/playlist-edit.component';
import { CreateSingerComponent } from './singer/create-singer/create-singer.component';
import { ShowSingerComponent } from './singer/show-singer/show-singer.component';
import { CreateSong2Component } from './song/create-song2/create-song2.component';
import { CreateSingerSongComponent } from './singerSong/create-singer-song/create-singer-song.component';
import { CheckPasswordComponent } from './account/check-password/check-password.component';
import { ChangePasswordComponent } from './account/change-password/change-password.component';
import { TopMostListensComponent } from './play-music/playMusic/top-most-listens/top-most-listens.component';
import {NgxPaginationModule} from "ngx-pagination";
import {HeaderUserComponent} from "./home-index/header-user/header-user.component";
import { SongUploadedComponent } from './song/song-uploaded/song-uploaded.component';
import { EditSongComponent } from './song/edit-song/edit-song.component';
import { ShowDetailSong2Component } from './song/show-detail-song2/show-detail-song2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeIndexComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    BodyIndexComponent,
    AfterRegisterComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    CreateSingerComponent,
    ShowSingerComponent,
    NavComponent,
    PlaylistShowComponent,
    PlaylistDetailComponent,
    PlaylistCreateComponent,
    PlaylistDeleteComponent,
    PlaylistEditComponent,
    CheckPasswordComponent,
    ChangePasswordComponent,
    NavComponent,
    TopMostListensComponent,
    HeaderUserComponent,
    ShowSingerComponent,
    CreateSong2Component,
    CreateSingerSongComponent,
    SongUploadedComponent,
    EditSongComponent,
    ShowDetailSong2Component
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        AngularFireAuthModule,
        AngularFireStorageModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        NgxPaginationModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
