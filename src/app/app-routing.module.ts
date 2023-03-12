import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateComponent} from "./song/create/create.component";
import {CreateSingerComponent} from "./singer/create-singer/create-singer.component";
import {CreateSingerSongComponent} from "./singerSong/create-singer-song/create-singer-song.component";
import {FindSingerNameComponent} from "./singer/find-singer-name/find-singer-name.component";

const routes: Routes = [
  {path:'createSong',component: CreateComponent},
  {path:'createSinger',component: CreateSingerComponent},
  {path:'createSingerSong/:id',component: CreateSingerSongComponent},
  {path:'findSinger',component: FindSingerNameComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
