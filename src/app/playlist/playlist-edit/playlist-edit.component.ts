import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {PlaylistService} from "../../service/playlist/playlist.service";

@Component({
  selector: 'app-playlist-edit',
  templateUrl: './playlist-edit.component.html',
  styleUrls: ['./playlist-edit.component.css']
})
export class PlaylistEditComponent implements OnInit{

  constructor(private route: ActivatedRoute, private router: Router, private playlistService: PlaylistService) {
  }

  formPlaylist!: FormGroup
  playlist_id: any
  playlist: any

  ngOnInit(): void {
    this.playlist_id = this.route.snapshot.paramMap.get('id')
    this.playlistService.findPlaylistById(this.playlist_id).subscribe(data => {
      this.playlist = data
      this.formPlaylist = new FormGroup({
        id: new FormControl(this.playlist?.id),
        name: new FormControl(this.playlist?.name),
        active: new FormControl(this.playlist?.active)
      })
    })
  }

  savePlaylist() {
    this.playlist = this.formPlaylist.value
    let active = this.formPlaylist.value.active
    console.log(this.playlist)
    if (active != null) {
      this.playlistService.saveEditPlaylist(this.playlist).subscribe(data => {
        alert("success")
        this.router.navigate(['/playlist/show'])
      })
    } else {
      alert("choice mode")
    }
  }

}
