import {Component, OnInit} from '@angular/core';
import {Song} from "../../../models/Song";
import {SongService} from "../../../service/SongService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-top-like',
  templateUrl: './top-like.component.html',
  styleUrls: ['./top-like.component.css']
})
export class TopLikeComponent implements OnInit{
  songs: Song[] = [];
  p: number = 1;
  total: number = 0;
  constructor(private songService: SongService, private router: Router) {
  }

  ngOnInit(): void {
    this.findTopLikeSong()

  }
  findTopLikeSong(){
    this.songService.findTopLikeSong(this.p).subscribe((data) => {
      this.songs = data;
      this.total = this.songs.length;
    })
  }

  pageChangeEvent(event: number) {
    this.p = event
    this.findTopLikeSong();
  }

}
