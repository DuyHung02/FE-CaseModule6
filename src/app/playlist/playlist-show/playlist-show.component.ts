import {Component, OnInit} from '@angular/core';
import {PlaylistService} from "../../service/playlist/playlist.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-playlist-show',
  templateUrl: './playlist-show.component.html',
  styleUrls: ['./playlist-show.component.css']
})
export class PlaylistShowComponent implements OnInit {

  constructor(private playlistService: PlaylistService, private router: Router, private route: ActivatedRoute) {
  }

  account!: any
  account_id: any
  playlists: any
  songs: any

  change: string | null = null

  ngOnInit(): void {
    // @ts-ignore
    this.account = JSON.parse(localStorage.getItem("accountToken"))
    this.account_id = this.account.id
    this.playlistService.showPlaylist(this.account_id).subscribe(data => {
      this.playlists = data
    })
  }
}

