import {Component, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Playlist} from "../../models/Playlist";
import {PlaylistService} from "../../service/playlist/playlist.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AccountService} from "../../service/account/account.service";
import {SingerService} from "../../service/SingerService";
import {Song} from "../../models/Song";
import {AccountToken} from "../../models/AccountToken";

@Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.css']
})
export class PlaylistDetailComponent implements OnInit {
  constructor(private playlistService: PlaylistService, private route: ActivatedRoute, private router: Router) {
  }

  playlist!: Playlist
  playlist_id: any
  songs!: Song[]
  account!: AccountToken
  musicOn: boolean = false
  @Output() index!: number
  ngOnInit(): void {
    // @ts-ignore
    this.account = JSON.parse(localStorage.getItem("accountToken"))
    this.playlist_id = this.route.snapshot.paramMap.get('id')
    this.playlistService.findPlaylistById(this.playlist_id).subscribe(data => {
      this.playlist = data;
      this.songs = this.playlist.songs
    })
  }

  playOn(index: number) {
    this.musicOn = true
    this.index = index
  }

  deleteSongInPlaylist(song_id: number, playlist_id: number) {
    console.log(song_id, playlist_id)
    this.playlistService.deleteSongInPlaylist(song_id, playlist_id).subscribe(data => {
      location.reload()
    })
  }


}
