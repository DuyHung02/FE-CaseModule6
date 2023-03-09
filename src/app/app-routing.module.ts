import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateComponent} from "./song/create/create.component";
import {CreateSingerComponent} from "./singer/create-singer/create-singer.component";

const routes: Routes = [
  {path:'createSong',component: CreateComponent},
  {path:'createSinger',component: CreateSingerComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
