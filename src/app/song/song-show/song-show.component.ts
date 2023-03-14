import {Component, OnInit} from '@angular/core';
import {PlaylistService} from "../../service/playlist/playlist.service";

@Component({
  selector: 'app-song-show',
  templateUrl: './song-show.component.html',
  styleUrls: ['./song-show.component.css']
})
export class SongShowComponent implements OnInit{

  constructor(private playlistService: PlaylistService) {
  }

  account: any
  id_account: any
  token: any
  playlists: any

  ngOnInit(): void {
    // @ts-ignore
    this.account = JSON.parse(localStorage.getItem("accountToken"))
    console.log(this.account)
    this.playlists = this.account.playlists
  }

  addSongToPlaylist(id_song: number, id_playlist: number) {
    this.id_account = this.account.id
    this.token = this.account.token
    this.playlistService.addSongToPlaylist(this.id_account, id_playlist, id_song, this.token).subscribe(data => {
      alert("them thanh cong")
      console.log("id account: " + this.id_account)
      console.log("id playlist: " + id_playlist)
      console.log("id song: " + id_song)
      console.log("Token: " + this.token)
      localStorage.setItem("accountToken", JSON.stringify(data))
      console.log(data)
    })
  }

}
