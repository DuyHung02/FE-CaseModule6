import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {environment} from "./environments/environment.prod";
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
    NavComponent
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
