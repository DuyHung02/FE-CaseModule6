import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShowPlaylistComponent} from "./show-playlist/show-playlist.component";
import {CreatPlaylistComponent} from "./creat-playlist/creat-playlist.component";


const routes: Routes = [
  {path: 'show', component:ShowPlaylistComponent},
  {path: 'creat', component:CreatPlaylistComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
