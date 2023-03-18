import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {environment} from "../environments/environment.prod";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {BodyIndexComponent} from "./home-index/body-index/body-index.component";
import {FooterComponent} from "./home-index/footer/footer.component";
import {NavComponent} from "./home-index/nav/nav.component";
import {HomeIndexComponent} from "./home-index/home-index.component";
import {HeaderComponent} from "./home-index/header/header.component";
import {RegisterComponent} from "./account/register/register.component";
import {AfterRegisterComponent} from "./account/after-register/after-register.component";
import {LoginComponent} from "./account/login/login.component";
import {HomeComponent} from "./home/home.component";
import { HeaderUserComponent } from './home-index/header-user/header-user.component';
import { PlaylistShowComponent } from './playlist/playlist-show/playlist-show.component';
import { PlaylistDetailComponent } from './playlist/playlist-detail/playlist-detail.component';
import { PlaylistCreateComponent } from './playlist/playlist-create/playlist-create.component';
import { PlaylistDeleteComponent } from './playlist/playlist-delete/playlist-delete.component';
import { PlaylistEditComponent } from './playlist/playlist-edit/playlist-edit.component';
import { CreateSingerComponent } from './singer/create-singer/create-singer.component';
import { ShowSingerComponent } from './singer/show-singer/show-singer.component';

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
    HeaderUserComponent,
    PlaylistShowComponent,
    PlaylistDetailComponent,
    PlaylistCreateComponent,
    PlaylistDeleteComponent,
    PlaylistEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
