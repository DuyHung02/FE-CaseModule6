import {Component, OnInit} from '@angular/core';
import {Song} from "../../models/Song";
import {FormControl, FormGroup} from "@angular/forms";
import {SingerSongId} from "../../models/dto/SingerSongId";
import {SingerSongService} from "../../service/SingerSongService";
import {SongService} from "../../service/SongService";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-song',
  templateUrl: './edit-song.component.html',
  styleUrls: ['./edit-song.component.css']
})
export class EditSongComponent implements OnInit {
  id: any;
  // account: any;
  // account_id: any;
  song: Song | undefined;
  formEditSong !: FormGroup;
  singerSongId: SingerSongId | undefined;

  constructor(private activatedRoute: ActivatedRoute, private songService: SongService, private router: Router) {
  }

  ngOnInit(): void {
    // // @ts-ignore
    // this.account = JSON.parse(localStorage.getItem("accountToken"))
    // this.account_id = this.account.id;

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id != null) {
      this.songService.findById(+this.id).subscribe((data) => {
        this.song=data;
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
      // this.router.navigate(["createSingerSong/" + this.song?.id]);
      this.router.navigate(["/showCreateSongByAccount"]);
    })
  }
}
