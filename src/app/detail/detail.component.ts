import {Component, OnInit} from '@angular/core';
import {PlaylistService} from "../service/playlist/playlist.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AccountToken} from "../models/AccountToken";
import {Playlist} from "../models/Playlist";
import {AccountService} from "../service/account/account.service";
import {Singer} from "../models/Singer";
import {SingerService} from "../service/SingerService";
import {Song} from "../models/Song";

@Component({
  selector: 'app-playlist-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{

  constructor(private playlistService : PlaylistService, private route : ActivatedRoute, private router: Router,
              private accountService : AccountService, private singerService : SingerService) {
  }

  playlist!: Playlist
  playlist_id: any
  songs: Song[] = []
  account!: AccountToken
  singer!: Singer
  singer_id: any

  change: string | null = null

  ngOnInit(): void {
    // @ts-ignore
    this.account = JSON.parse(localStorage.getItem("accountToken"))

    let type = this.route.snapshot.queryParamMap.get('type')

    if (type === 'playlist') {
      this.change = type
      console.log(this.change)
      this.playlist_id = this.route.snapshot.paramMap.get('id')
      this.playlistService.findPlaylistById(this.playlist_id).subscribe(data => {
        this.playlist = data;
        this.songs = this.playlist.songs
      })
    } else if(type === 'singer') {
      this.change = type
      console.log(this.change)
      this.singer_id = this.route.snapshot.paramMap.get('id')
      this.singerService.findById(this.singer_id).subscribe(data => {
        this.singer = data
      })
    }
  }

  deleteSongInPlaylist(song_id: number, playlist_id: number) {
    console.log(song_id, playlist_id)
    this.playlistService.deleteSongInPlaylist(song_id, playlist_id).subscribe(data => {
      location.reload()
    })
  }

}
