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
  token!: String

  ngOnInit(): void {
    // @ts-ignore
    this.account = JSON.parse(localStorage.getItem("accountToken"))
    this.account_id = this.account.id
    this.token = this.account.token
  }

  formPlaylist: FormGroup = new FormGroup({
    name: new FormControl
  })

  savePlaylist() {
    let name = this.formPlaylist.value.name
    console.log(name, this.account_id, this.token)
    this.playlistService.savePlaylist(this.account_id, name, this.token).subscribe(data => {
      localStorage.setItem("accountToken", JSON.stringify(data))
      this.router.navigate(['/song/show'])
      console.log(data)
    })
  }


}
