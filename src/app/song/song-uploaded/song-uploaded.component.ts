import {Component, OnInit} from '@angular/core';
import { SongService } from 'src/app/service/SongService';
import {Song} from "../../models/Song";
import {Router} from "@angular/router";

@Component({
  selector: 'app-song-uploaded',
  templateUrl: './song-uploaded.component.html',
  styleUrls: ['./song-uploaded.component.css']
})
export class SongUploadedComponent implements OnInit {
  songs: Song[] = [];
  account: any;
  account_id: any;
  playlists: any

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
