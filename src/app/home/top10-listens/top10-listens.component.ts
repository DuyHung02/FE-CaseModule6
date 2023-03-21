import {Component, EventEmitter, OnChanges, OnDestroy, OnInit, Output} from '@angular/core';
import {Song} from "../../models/Song";
import {SongService} from "../../service/SongService";
import {ActivatedRoute} from "@angular/router";
import {AccountToken} from "../../models/AccountToken";

@Component({
  selector: 'app-top10-listens',
  templateUrl: './top10-listens.component.html',
  styleUrls: ['./top10-listens.component.css']
})



export class Top10ListensComponent implements OnInit {

  constructor(private songService: SongService, private route: ActivatedRoute) {}
  total!: number
  songs: Song[] = []
  index!: number
  @Output() top10Songs : EventEmitter<Song[]> = new EventEmitter<Song[]>()
  @Output() top10SongIndex : EventEmitter<number> = new EventEmitter<number>()

  ngOnInit(): void {
    this.findTop5Song();

  }

  findTop5Song() {
    this.songService.findTop5Listens().subscribe((data) => {
      this.songs = data;
      this.total = data.length;
    })
  }

  findSongAndIndex(index: number) {
    this.index = index
    this.top10Songs.emit(this.songs)
    this.top10SongIndex.emit(this.index)
  }

}




