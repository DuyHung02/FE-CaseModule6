import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SongService} from "../../service/SongService";
import {Song} from "../../models/Song";
import {SingerSongService} from "../../service/SingerSongService";
import {SingerSong} from "../../models/SingerSong";

@Component({
  selector: 'app-show-detail-song',
  templateUrl: './show-detail-song.component.html',
  styleUrls: ['./show-detail-song.component.css']
})
export class ShowDetailSongComponent implements OnInit {
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

          console.log(this.singerSongs);
          console.log(this.singerSongs[0].singer.singer_name);

        })

      })
    }
  }
}
