import {Component, OnInit} from '@angular/core';
import {PlaylistService} from "../service/playlist/playlist.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AccountToken} from "../models/AccountToken";
import {Playlist} from "../models/Playlist";
import {AccountService} from "../service/account/account.service";

@Component({
  selector: 'app-playlist-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{

  constructor(private playlistService : PlaylistService, private route : ActivatedRoute, private router: Router,
              private accountService : AccountService) {
  }

  playlist!: Playlist
  playlist_id: any
  songs: any
  account!: AccountToken

  ngOnInit(): void {
    // @ts-ignore
    this.account = JSON.parse(localStorage.getItem("accountToken"))

    this.playlist_id = this.route.snapshot.paramMap.get('id')
    this.playlistService.findPlaylistById(this.playlist_id).subscribe(data => {
      this.playlist = data;
      this.songs = this.playlist.songs
    })
  }

  deleteSongInPlaylist(song_id: number, playlist_id: number) {
    console.log(song_id, playlist_id)
    this.playlistService.deleteSongInPlaylist(song_id, playlist_id).subscribe(data => {
      this.router.navigate(['/playlists'])
    })
  }

}
