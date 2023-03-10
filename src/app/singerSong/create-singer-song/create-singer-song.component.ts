import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {SingerSongId} from "../../models/dto/SingerSongId";
import {SingerSongService} from "../../service/SingerSongService";
import {SongService} from "../../service/SongService";
import {Song} from "../../models/Song";
declare var $: any;
@Component({
  selector: 'app-create-singer-song',
  templateUrl: './create-singer-song.component.html',
  styleUrls: ['./create-singer-song.component.css']
})
export class CreateSingerSongComponent implements OnInit {
  song_id: any;
  song:Song| undefined;
  singerSongId: SingerSongId | undefined;
  formCreateSingerSong !: FormGroup;

  constructor(private songService:SongService,private activatedRoute: ActivatedRoute, private singerSongService: SingerSongService, private router: Router) {
  }

  ngOnInit(): void {
    this.song_id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.song_id != null) {
      this.formCreateSingerSong = new FormGroup({
        singer_id: new FormControl(this.singerSongId?.singer_id),
        song_id: new FormControl(this.song_id),
      })
    }
  }

  create() {
    console.log(this.formCreateSingerSong.value);
    this.singerSongService.createSingerSong(this.formCreateSingerSong.value).subscribe((data) => {
      // this.router.navigate(["/show"]);
    })
  }
}
