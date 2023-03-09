import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShowPlaylistComponent} from "./show-playlist/show-playlist.component";


const routes: Routes = [
  {path: 'show', component:ShowPlaylistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
