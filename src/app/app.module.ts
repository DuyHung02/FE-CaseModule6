import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import {FooterComponent} from "./home/footer/footer.component";
import { BodyComponent } from './home/body/body.component';
import { NewSongComponent } from './home/body/new-song/new-song.component';
import { ChartsComponent } from './home/body/charts/charts.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { SingerComponent } from './home/body/singer/singer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    NewSongComponent,
    ChartsComponent,
    NavbarComponent,
    SingerComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
