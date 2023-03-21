import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Song} from "../../models/Song";
import {SongService} from "../../service/SongService";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-top-charts',
  templateUrl: './top-charts.component.html',
  styleUrls: ['./top-charts.component.css']
})





export class TopChartsComponent implements OnInit{

  songs: Song[] = []
  index!: number
  @Output() listSongs : EventEmitter<Song[]> = new EventEmitter<Song[]>()
  @Output() songIndex : EventEmitter<number> = new EventEmitter<number>()
  ngOnInit(): void {
    this.findTopLikeSong()
  }

  constructor(private songService :SongService, private route: ActivatedRoute) {}

  findTopLikeSong() {
    this.songService.findTopLikeSong().subscribe((data) => {
      this.songs = data;
    })
  }

  findSongAndIndex(index: number) {
    this.index = index
    this.listSongs.emit(this.songs)
    this.songIndex.emit(this.index)
  }


}







