import {Component, OnInit} from '@angular/core';
import {Song} from "../../models/Song";
import {SongService} from "../../service/SongService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-show-create-song-by-account',
  templateUrl: './show-create-song-by-account.component.html',
  styleUrls: ['./show-create-song-by-account.component.css']
})
export class ShowCreateSongByAccountComponent implements OnInit {
  songs: Song[] = [];
  account: any;
  account_id: any;

  constructor(private songService: SongService, private router: Router) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.account= JSON.parse(localStorage.getItem("accountToken"))
    this.account_id =this.account.id;
    this.songService.findSaveSong(this.account_id).subscribe(data => {
      this.songs = data;
    })
  }

}
