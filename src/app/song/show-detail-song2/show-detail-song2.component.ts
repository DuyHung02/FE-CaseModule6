import {Component, OnInit} from '@angular/core';
import { Song } from 'src/app/models/Song';
import {SingerSong} from "../../models/SingerSong";
import {SingerSongService} from "../../service/SingerSongService";
import {ActivatedRoute, Router} from "@angular/router";
import {SongService} from "../../service/SongService";

@Component({
  selector: 'app-show-detail-song2',
  templateUrl: './show-detail-song2.component.html',
  styleUrls: ['./show-detail-song2.component.css']
})
export class ShowDetailSong2Component implements OnInit {
  id: any;
  song!: Song;
  singerSongs: SingerSong[] = [];
  singers!: any

  constructor(private singerSongService: SingerSongService, private activatedRoute: ActivatedRoute, private songService: SongService, private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id != null) {
      this.songService.findById(+this.id).subscribe((data) => {
        this.song = data;

        this.singerSongService.findSingerSongBySong_id(+this.id).subscribe(data => {
          this.singerSongs = data;
          console.log(data)

        })

      })
    }
  }
}
