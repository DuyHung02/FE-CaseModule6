import {Component, OnInit} from '@angular/core';
import {PlaylistService} from "../../service/playlist/playlist.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-playlist-create',
  templateUrl: './playlist-create.component.html',
  styleUrls: ['./playlist-create.component.css']
})
export class PlaylistCreateComponent implements OnInit {

  constructor(private playlistService: PlaylistService, private router : Router) {
  }

  account: any
  account_id: any

  ngOnInit(): void {
    // @ts-ignore
    this.account = JSON.parse(localStorage.getItem("accountToken"))
    this.account_id = this.account.id
  }

  formPlaylist: FormGroup = new FormGroup({
    name: new FormControl,
    active: new FormControl
  })

  savePlaylist() {
    let name = this.formPlaylist.value.name
    let active = this.formPlaylist.value.active
    if (active != null) {
      this.playlistService.savePlaylist(this.account_id, name, active).subscribe(data => {
        this.router.navigate(['/song/show'])
      })
    } else {
      alert("choice mode")
    }
  }


}
