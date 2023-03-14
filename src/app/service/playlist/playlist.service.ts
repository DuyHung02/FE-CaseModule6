import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private http: HttpClient) { }

  addSongToPlaylist(account_id: number, playlist_id: number, song_id: number, token: String): Observable<any> {
    let playlistSong = {
      account_id: account_id,
      playlist_id: playlist_id,
      song_id: song_id,
      token: token
    }
    return this.http.post<any>('http://localhost:8080/playlist/add/song', playlistSong)
  }

  savePlaylist(account_id: number, name: String, token: String): Observable<any> {
    let playlist = {
      account_id: account_id,
      name: name,
      token: token
    }
    return this.http.post<any>('http://localhost:8080/playlist/create', playlist)
  }

  deletePlaylist(id: number): Observable<any> {
    return this.http.get<any>('http://localhost:8080/playlist/delete/' + id)
  }

  findPlaylistById(id: number): Observable<any> {
    return this.http.get<any>('http://localhost:8080/playlist/find/' + id)
  }

}
