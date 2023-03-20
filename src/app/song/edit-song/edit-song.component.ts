import {Component, OnInit} from '@angular/core';
import {Song} from "../../models/Song";
import {SingerSongId} from "../../models/dto/SingerSongId";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {SongService} from 'src/app/service/SongService';

@Component({
  selector: 'app-edit-song',
  templateUrl: './edit-song.component.html',
  styleUrls: ['./edit-song.component.css']
})
export class EditSongComponent implements OnInit {
  id: any;
  song: Song | undefined;
  formEditSong !: FormGroup;
  singerSongId: SingerSongId | undefined;

  constructor(private activatedRoute: ActivatedRoute, private songService: SongService, private router: Router) {
  }

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id != null) {
      this.songService.findById(+this.id).subscribe((data) => {
        this.song = data;
        this.formEditSong = new FormGroup({
          id: new FormControl(this.song?.id),
          song_name: new FormControl(this.song?.song_name),
          description: new FormControl(this.song?.description),
          file_mp3: new FormControl(this.song?.file_mp3),
          song_avatar: new FormControl(this.song?.song_avatar),
          author: new FormControl(this.song?.author),
          posted: new FormControl(this.song?.posted),
          album: new FormControl(this.song?.album),
          song_music_genre: new FormControl(this.song?.song_music_genre),
          account_id: new FormControl(this.song?.account_id),
          actives: new FormControl(this.song?.actives),
        })
      })
    }
  }

  edit() {
    console.log(this.formEditSong.value);
    this.songService.editSong(this.formEditSong.value).subscribe((data) => {
      location.replace('/songUploaded')
    })
  }

}
