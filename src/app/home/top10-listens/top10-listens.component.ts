import {Component, EventEmitter, OnChanges, OnDestroy, OnInit, Output} from '@angular/core';
import {Song} from "../../models/Song";
import {SongService} from "../../service/SongService";
import {ActivatedRoute} from "@angular/router";
import {AccountToken} from "../../models/AccountToken";
import {PlaylistService} from "../../service/playlist/playlist.service";

@Component({
  selector: 'app-top10-listens',
  templateUrl: './top10-listens.component.html',
  styleUrls: ['./top10-listens.component.css']
})



export class Top10ListensComponent implements OnInit {

  constructor(private songService: SongService, private playlistService: PlaylistService) {}
  total!: number
  songs: Song[] = []
  index!: number


  account: any
  account_id: any
  playlists: any
  checkSong!: boolean
  song_id!: number
  myMessenger: String = ''

  @Output() top10Songs : EventEmitter<Song[]> = new EventEmitter<Song[]>()
  @Output() top10SongIndex : EventEmitter<number> = new EventEmitter<number>()

  ngOnInit(): void {
    this.findTop5Song();
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

  findTop5Song() {
    this.songService.findTop5Listens().subscribe((data) => {
      this.songs = data;
      this.total = data.length;
    })
  }

  findSongAndIndex(index: number) {
    this.index = index
    this.top10Songs.emit(this.songs)
    this.top10SongIndex.emit(this.index)
  }

}




