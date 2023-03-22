import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PlaylistService} from "../../service/playlist/playlist.service";

@Component({
  selector: 'app-playlist-delete',
  templateUrl: './playlist-delete.component.html',
  styleUrls: ['./playlist-delete.component.css']
})
export class PlaylistDeleteComponent implements OnInit{

  constructor(private route : ActivatedRoute, private playlistService : PlaylistService) {
  }

  id: any
  playlist: any

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.playlistService.findPlaylistById(this.id).subscribe(data => {
      this.playlist = data
      console.log(data)
    })
  }

  deletePlaylist(id: number) {
    this.playlistService.deletePlaylist(id).subscribe(data => {
      location.replace('/playlists')
    })
  }

}
