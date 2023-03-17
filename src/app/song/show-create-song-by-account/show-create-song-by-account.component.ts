import {Component, OnInit} from '@angular/core';
import {Song} from "../../models/Song";
import {SongService} from "../../service/SongService";
import {Router} from "@angular/router";
import {PlaylistService} from "../../service/playlist/playlist.service";

@Component({
  selector: 'app-show-create-song-by-account',
  templateUrl: './show-create-song-by-account.component.html',
  styleUrls: ['./show-create-song-by-account.component.css']
})
export class ShowCreateSongByAccountComponent implements OnInit {
  songs: Song[] = [];
  account: any;
  account_id: any;
  checkSong!: boolean
  playlists: any

  constructor(private songService: SongService, private router: Router, private playlistService: PlaylistService) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.account= JSON.parse(localStorage.getItem("accountToken"))
    this.account_id =this.account.id;
    this.songService.findSaveSong(this.account_id).subscribe(data => {
      this.songs = data;
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
