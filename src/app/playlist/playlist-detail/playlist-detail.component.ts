import {Component, OnInit} from '@angular/core';
import {PlaylistService} from "../../service/playlist/playlist.service";
import {ActivatedRoute} from "@angular/router";
import {Playlist} from "../../models/Playlist";

@Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.css']
})
export class PlaylistDetailComponent implements OnInit{

  constructor(private playlistService : PlaylistService, private route : ActivatedRoute) {
  }

  playlist!: any
  playlist_id: any
  songs: any

  ngOnInit(): void {
    this.playlist_id = this.route.snapshot.paramMap.get('id')
    this.playlistService.findPlaylistById(this.playlist_id).subscribe(data => {
      this.playlist = data;
      this.songs = this.playlist.songs
    })
  }

}
