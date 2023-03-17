import {Component, OnInit} from '@angular/core';
import {PlaylistService} from "../../service/playlist/playlist.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Playlist} from "../../models/Playlist";

@Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.css']
})
export class PlaylistDetailComponent implements OnInit{

  constructor(private playlistService : PlaylistService, private route : ActivatedRoute, private router: Router) {
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

  deleteSongInPlaylist(song_id: number, playlist_id: number) {
    console.log(song_id, playlist_id)
    this.playlistService.deleteSongInPlaylist(song_id, playlist_id).subscribe(data => {
      this.router.navigate(['/playlists'])
    })
  }

}
