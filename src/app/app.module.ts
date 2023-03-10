import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {FooterComponent} from "./footer/footer.component";
import {BodyComponent} from "./home/body/body.component";
import {NewSongComponent} from "./home/body/new-song/new-song.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {ChartsComponent} from "./home/body/charts/charts.component";
import {PlayListComponent} from "./home/body/play-list/play-list.component";
import {SingerComponent} from "./home/body/singer/singer.component";
import {UserProfileComponent} from "./profile/user-profile/user-profile.component";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    NewSongComponent,
    ChartsComponent,
    NavbarComponent,
    SingerComponent,
    PlayListComponent,
    UserProfileComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
