import {Component, OnInit} from '@angular/core';
import { Song } from 'src/app/models/Song';
import {SongService} from "../../service/SongService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-show-song',
  templateUrl: './show-song.component.html',
  styleUrls: ['./show-song.component.css']
})
export class ShowSongComponent implements OnInit {
  songs: Song[] = [];

  constructor(private songService: SongService, private router: Router) {
  }

  ngOnInit(): void {
    this.songService.getAll().subscribe(data => {
      this.songs = data;
    })
  }
}
