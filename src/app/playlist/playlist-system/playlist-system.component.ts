import {Component, OnInit} from '@angular/core';
import {PlaylistService} from "../../service/playlist/playlist.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-playlist-system',
  templateUrl: './playlist-system.component.html',
  styleUrls: ['./playlist-system.component.css']
})
export class PlaylistSystemComponent implements OnInit{

  constructor(private playlistService : PlaylistService) {
  }

  account!: any
  account_id: any
  playlists: any
  songs: any

  ngOnInit(): void {
    this.playlistService.findAllPlaylistActive().subscribe(data => {
      this.playlists = data
    })
  }

}
