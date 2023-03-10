import {Component, OnInit} from '@angular/core';
import {Song} from "../../models/Song";
import {FormControl, FormGroup} from "@angular/forms";
import {SongService} from "../../service/SongService";
import {Router} from "@angular/router";
import {SingerSongService} from "../../service/SingerSongService";
import {SingerSongId} from "../../models/dto/SingerSongId";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{
  song_id: any;
  song: Song | undefined;
  formCreateSong !: FormGroup;
  singerSongId: SingerSongId|undefined;

  constructor(private singerSongService: SingerSongService,private songService: SongService, private router: Router) {
  }

  ngOnInit(): void {
    this.formCreateSong = new FormGroup({
      song_name: new FormControl(this.song?.song_name),
      description: new FormControl(this.song?.description),
      file_mp3: new FormControl(this.song?.file_mp3),
      song_avatar: new FormControl(this.song?.song_avatar),
      author: new FormControl(this.song?.author),
      posted: new FormControl(this.song?.posted),
      album: new FormControl(this.song?.album),
      song_music_genre: new FormControl(this.song?.song_music_genre),
    })
  }

  create() {
    this.songService.createSong(this.formCreateSong.value).subscribe((data) => {
      this.song=data;
      this.router.navigate(["createSingerSong/"+this.song?.id]);
    })
  }

}
