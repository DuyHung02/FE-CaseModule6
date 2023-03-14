import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './song/create/create.component';
import { CreateSingerComponent } from './singer/create-singer/create-singer.component';
import { CreateSingerSongComponent } from './singerSong/create-singer-song/create-singer-song.component';
import { RegisterComponent } from './account/register/register.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './account/login/login.component';
import { ProfileComponent } from './account/profile/profile.component';
import { ProfileEditComponent } from './account/profile-edit/profile-edit.component';
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireModule} from "@angular/fire/compat";
import {AddTokenInterceptor} from "./service/token/add-token.interceptor";
import { environment } from '../environments/environment';
import { ChangePasswordComponent } from './account/change-password/change-password.component';
import { CheckAccountComponent } from './account/check-account/check-account.component';
import {BodyComponent} from "./home/body/body.component";
import {NewSongComponent} from "./home/body/new-song/new-song.component";
import {ChartsComponent} from "./home/body/charts/charts.component";
import {PlayListComponent} from "./home/body/play-list/play-list.component";
import {SingerComponent} from "./home/body/singer/singer.component";
import {FooterComponent} from "./home/footer/footer.component";
import {HeaderComponent} from "./home/header/header.component";
import {NavbarComponent} from "./home/navbar/navbar.component";
import {FindSingerNameComponent} from "./singer/find-singer-name/find-singer-name.component";
import { ShowSingerComponent } from './singer/show-singer/show-singer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateComponent,
    CreateSingerComponent,
    CreateSingerSongComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    ProfileEditComponent,
    ChangePasswordComponent,
    CheckAccountComponent,
    FooterComponent,
    BodyComponent,
    NewSongComponent,
    ChartsComponent,
    NavbarComponent,
    SingerComponent,
    PlayListComponent,
    FindSingerNameComponent,
    ShowSingerComponent,
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
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AddTokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
