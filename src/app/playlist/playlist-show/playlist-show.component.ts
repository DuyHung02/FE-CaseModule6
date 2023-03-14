import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-playlist-show',
  templateUrl: './playlist-show.component.html',
  styleUrls: ['./playlist-show.component.css']
})
export class PlaylistShowComponent implements OnInit{

  account: any
  playlists: any
  // songs: any

  ngOnInit(): void {
    // @ts-ignore
    this.account = JSON.parse(localStorage.getItem("accountToken"))
    console.log(this.account)
    this.playlists = this.account.playlists
    console.log(this.playlists)
    // this.songs = this.playlists.songs
  }

}
