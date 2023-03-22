import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Song} from "../../models/Song";
import {SongService} from "../../service/SongService";
import {ActivatedRoute, Router} from "@angular/router";
import {PlaylistService} from "../../service/playlist/playlist.service";

@Component({
  selector: 'app-top-charts',
  templateUrl: './top-charts.component.html',
  styleUrls: ['./top-charts.component.css']
})





export class TopChartsComponent implements OnInit{

  songs: Song[] = []
  index!: number

  account: any
  account_id: any
  playlists: any
  checkSong!: boolean
  song_id!: number
  myMessenger: String = ''
  @Output() listSongs : EventEmitter<Song[]> = new EventEmitter<Song[]>()
  @Output() songIndex : EventEmitter<number> = new EventEmitter<number>()
  ngOnInit(): void {
    this.findTopLikeSong()
    // @ts-ignore
    this.account = JSON.parse(localStorage.getItem("accountToken"))
    this.account_id = this.account.id
    this.playlistService.showPlaylist(this.account_id).subscribe(data => {
      this.playlists = data
    })
  }

  constructor(private songService :SongService, private playlistService: PlaylistService) {}


  addSongToPlaylist(id_song: number, id_playlist: number) {
    console.log("alo?")
    console.log("id song: " + id_song + "   id: playlist: " + id_playlist)
    this.playlistService.checkSongInPlaylist(id_song, id_playlist).subscribe(data => {
      this.checkSong = data
      if (this.checkSong) {
        this.playlistService.addSongToPlaylist(id_playlist, id_song).subscribe(data => {
          this.myMessenger = "Add success"
        })
      } else {
        this.myMessenger = "Music already in playlist"
      }
    })
  }

  getIdSong(id: number) {
    this.song_id = id
  }

  closeMessenger() {
    this.myMessenger = ''
  }

  findTopLikeSong() {
    this.songService.findTopLikeSong().subscribe((data) => {
      this.songs = data;
    })
  }

  findSongAndIndex(index: number) {
    this.index = index
    this.listSongs.emit(this.songs)
    this.songIndex.emit(this.index)
  }


}







