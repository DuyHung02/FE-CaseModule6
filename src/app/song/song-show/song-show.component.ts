import {Component, OnInit} from '@angular/core';
import {PlaylistService} from "../../service/playlist/playlist.service";
import {data} from "jquery";

@Component({
  selector: 'app-song-show',
  templateUrl: './song-show.component.html',
  styleUrls: ['./song-show.component.css']
})
export class SongShowComponent implements OnInit {

  constructor(private playlistService: PlaylistService) {
  }

  account: any
  account_id: any
  playlists: any
  checkSong!: boolean

  ngOnInit(): void {
    // @ts-ignore
    this.account = JSON.parse(localStorage.getItem("accountToken"))
    this.account_id = this.account.id
    this.playlistService.showPlaylist(this.account_id).subscribe(data => {
      this.playlists = data
    })
  }

  addSongToPlaylist(id_song: number, id_playlist: number) {
    console.log("alo?")
    console.log("id song: " + id_song + "   id: playlist: " + id_playlist)
    this.playlistService.checkSongInPlaylist(id_song, id_playlist).subscribe(data => {
      this.checkSong = data
      if (this.checkSong) {
        this.playlistService.addSongToPlaylist(id_playlist, id_song).subscribe(data => {
          alert("them thanh cong")
        })
      } else {
        alert("bai hat da co trong playlist")
      }
    })

  }

}
