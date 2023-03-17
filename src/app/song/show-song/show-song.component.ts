import {Component, OnInit} from '@angular/core';
import { Song } from 'src/app/models/Song';
import {SongService} from "../../service/SongService";
import {Router} from "@angular/router";
import {PlaylistService} from "../../service/playlist/playlist.service";

@Component({
  selector: 'app-show-song',
  templateUrl: './show-song.component.html',
  styleUrls: ['./show-song.component.css']
})
export class ShowSongComponent implements OnInit {
  songs: Song[] = [];

  constructor(private songService: SongService, private router: Router, private playlistService: PlaylistService) {
  }

  ngOnInit(): void {
    this.songService.getAll().subscribe(data => {
      this.songs = data;
    })
    // @ts-ignore
    this.account = JSON.parse(localStorage.getItem("accountToken"))
    this.account_id = this.account.id
    this.playlistService.showPlaylist(this.account_id).subscribe(data => {
      this.playlists = data
    })
  }

  account: any
  account_id: any
  playlists: any
  checkSong!: boolean

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
