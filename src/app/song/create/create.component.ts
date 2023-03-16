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
  account: any;
  account_id: any;
  song: Song | undefined;
  formCreateSong !: FormGroup;
  singerSongId: SingerSongId|undefined;

  constructor(private singerSongService: SingerSongService,private songService: SongService, private router: Router) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.account= JSON.parse(localStorage.getItem("accountToken"))
    this.account_id =this.account.id;

    this.formCreateSong = new FormGroup({
      account_id: new FormControl(this.account_id),
      song_name: new FormControl(),
      description: new FormControl(),
      file_mp3: new FormControl(),
      song_avatar: new FormControl(),
      author: new FormControl(),
      posted: new FormControl(),
      album: new FormControl(),
      song_music_genre: new FormControl(),
    })
  }

  create() {
    this.songService.createSong(this.formCreateSong.value).subscribe((data) => {
      this.song=data;
      this.router.navigate(["createSingerSong/"+this.song?.id]);
    })
  }

}
