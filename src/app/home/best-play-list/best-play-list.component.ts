import {Component, OnInit} from '@angular/core';
import {PlaylistService} from "../../service/playlist/playlist.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-best-play-list',
  templateUrl: './best-play-list.component.html',
  styleUrls: ['./best-play-list.component.css']
})
export class BestPlayListComponent implements OnInit{

  constructor(private playlistService : PlaylistService) {
  }

  account!: any
  account_id: any
  playlists: any

  ngOnInit(): void {
    this.playlistService.findAllPlaylistActive().subscribe(data => {
      this.playlists = data
    })
  }
}
