import {Component, OnInit, Output} from '@angular/core';
import {PlaylistService} from "../../service/playlist/playlist.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AccountService} from "../../service/account/account.service";
import {SingerService} from "../../service/SingerService";
import {Singer} from "../../models/Singer";
import {Song} from "../../models/Song";
import {SingerSongService} from "../../service/SingerSongService";
import {SingerSong} from "../../models/SingerSong";
import {AccountToken} from "../../models/AccountToken";

@Component({
  selector: 'app-detail-singer',
  templateUrl: './detail-singer.component.html',
  styleUrls: ['./detail-singer.component.css']
})
export class DetailSingerComponent implements OnInit{
  constructor(private route : ActivatedRoute, private router: Router, private singerService : SingerService,
              private singerSongService: SingerSongService, private playlistService: PlaylistService) {
  }
  singer!: Singer
  singer_id: any
  songs: Song[] = []
  account: any
  account_id: any
  playlists: any
  checkSong!: boolean
  song_id!: number
  myMessenger: String = ''

  musicOn: boolean = false
  @Output() index!: number


  ngOnInit(): void {
    this.singer_id = this.route.snapshot.paramMap.get('id')
    this.singerService.findById(this.singer_id).subscribe(data => {
      this.singer = data
      this.singer_id = this.singer.id
      this.singerSongService.findSongBySinger(this.singer_id).subscribe(data => {
        this.songs = data
        // @ts-ignore
        this.account = JSON.parse(localStorage.getItem("accountToken"))
        this.account_id = this.account.id
        this.playlistService.showPlaylist(this.account_id).subscribe(data => {
          this.playlists = data
        })
      })
    })
  }

  playOn(index: number) {
    this.musicOn = true
    this.index = index
  }

  getIdSong(id: number) {
    this.song_id = id
  }

  closeMessenger() {
    this.myMessenger = ''
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

}
