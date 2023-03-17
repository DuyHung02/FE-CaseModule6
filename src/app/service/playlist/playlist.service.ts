import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Playlist} from "../../models/Playlist";
import {PlaylistSong} from "../../models/dto/PlaylistSong";

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private http: HttpClient) { }

  addSongToPlaylist(playlist_id: number, song_id: number): Observable<PlaylistSong> {
    let playlistSongId = {
      playlist_id: playlist_id,
      song_id: song_id
    }
    return this.http.post<PlaylistSong>('http://localhost:8080/playlist/add/song', playlistSongId)
  }

  savePlaylist(account_id: number, name: String, active: boolean, avatarPlaylist: String): Observable<any> {
    let playlist = {
      account_id: account_id,
      name: name,
      active: active,
      avatarPlaylist: avatarPlaylist
    }
    return this.http.post<any>('http://localhost:8080/playlist/create', playlist)
  }

  saveAvatarPlaylist(avatarPlaylist: String, playlist_id: number): Observable<String> {
    let playlist = {
      avatarPlaylist: avatarPlaylist,
      playlist_id: playlist_id
    }
    return this.http.post<String>('http://localhost:8080/playlist/avatar', playlist)
  }

  saveEditPlaylist(playlist: Playlist): Observable<Playlist> {
    return this.http.post<Playlist>('http://localhost:8080/playlist/save', playlist)
  }

  deletePlaylist(id: number): Observable<any> {
    return this.http.get<any>('http://localhost:8080/playlist/delete/' + id)
  }

  findPlaylistById(id: number): Observable<Playlist> {
    return this.http.get<any>('http://localhost:8080/playlist/find/' + id)
  }

  showPlaylist(account_id: number): Observable<Playlist> {
    return this.http.get<Playlist>('http://localhost:8080/playlist/show/' + account_id)
  }

  checkSongInPlaylist(song_id: number, playlist_id: number): Observable<any> {
    let playlistSong = {
      song_id: song_id,
      playlist_id: playlist_id
    }
    return this.http.post<PlaylistSong>('http://localhost:8080/playlist/checkSong', playlistSong)
  }

  deleteSongInPlaylist(song_id: number, playlist_id: number): Observable<any> {
    let playlistSong = {
      song_id: song_id,
      playlist_id: playlist_id
    }
    return this.http.post<PlaylistSong>('http://localhost:8080/playlist/remove/song', playlistSong)
  }

}
