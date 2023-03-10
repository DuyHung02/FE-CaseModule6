import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {PlayList} from "../../Model/playList";

@Injectable({
  providedIn: 'root'
})
export class CreatPlaylistService {

  constructor(private http: HttpClient) {
  }
  createPlayList(PlayList: any): Observable<any>{
    return this.http.post<any>("http://localhost:8080/playlist", PlayList)
  }
  getAll():Observable<PlayList[]>{
    return this.http.get<PlayList[]>("http://localhost:8080/playlist")
  }
  delete(id:number): Observable<void>{
    return this.http.delete<void>(`http://localhost:8080/playlist/${id}`)
  }
  findById(id: number): Observable<PlayList>{
    return this.http.get<PlayList>(`http://localhost:8080/playlist/${id}`)
  }
  editPlayList(playlist: PlayList): Observable<PlayList>{
    return this.http.put<PlayList>("http://localhost:8080/playlist", PlayList)
  }
}
