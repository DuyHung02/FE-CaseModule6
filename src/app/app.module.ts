import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { ShowComponent } from './song/show/show.component';
import { CreateComponent } from './song/create/create.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { CreateSingerComponent } from './singer/create-singer/create-singer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShowComponent,
    CreateComponent,
    CreateSingerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
