import {Component, OnInit} from '@angular/core';
import {Singer} from "../../models/Singer";
import {SingerService} from "../../service/SingerService";
import {Router} from "@angular/router";
import {Song} from "../../models/Song";
import {SongService} from "../../service/SongService";

@Component({
  selector: 'app-find-new-song',
  templateUrl: './find-new-song.component.html',
  styleUrls: ['./find-new-song.component.css']
})
export class FindNewSongComponent implements OnInit{
  song: Song[] = [];

  constructor(private songService: SongService, private router: Router) {
  }

  ngOnInit(): void {
    this.songService.getAll().subscribe(data => {
      this.song = data;
    })
  }

}
