import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PlayList} from "../../Model/playList";

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor( private Http: HttpClient) { }



  show_Playlist():Observable<PlayList[]>{
    return this.Http.get<PlayList[]>("http://localhost:8080/playlist")
  }
}
