import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { ShowPlaylistComponent } from './show-playlist/show-playlist.component';
import { CreatPlaylistComponent } from './creat-playlist/creat-playlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    ShowPlaylistComponent,
      CreatPlaylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
