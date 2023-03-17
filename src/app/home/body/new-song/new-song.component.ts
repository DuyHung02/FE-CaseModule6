import {Component, OnInit} from '@angular/core';
import {Song} from "../../../models/Song";
import {SongService} from "../../../service/SongService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-song',
  templateUrl: './new-song.component.html',
  styleUrls: ['./new-song.component.css']
})

export class NewSongComponent implements OnInit {
  songs: Song[] = [];
  p: number = 1;
  total: number = 0;
  constructor(private songService: SongService, private router: Router) {
  }

  ngOnInit(): void {
    this.find10NewSong()

  }
  find10NewSong(){
    this.songService.findNewSong(this.p).subscribe((data) => {
      this.songs = data;
      this.total = this.songs.length;
    })
  }

  pageChangeEvent(event: number) {
    this.p = event
    this.find10NewSong();
  }
}
