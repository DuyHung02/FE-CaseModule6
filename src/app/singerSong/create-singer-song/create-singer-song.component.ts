import {Component, OnInit} from '@angular/core';
import {Song} from "../../models/Song";
import {SingerSongId} from "../../models/dto/SingerSongId";
import {FormControl, FormGroup} from "@angular/forms";
import {Singer} from "../../models/Singer";
import {ActivatedRoute, Router} from "@angular/router";
import {SingerService} from "../../service/SingerService";
import {SingerSongService} from "../../service/SingerSongService";

@Component({
  selector: 'app-create-singer-song',
  templateUrl: './create-singer-song.component.html',
  styleUrls: ['./create-singer-song.component.css']
})
export class CreateSingerSongComponent implements OnInit {
  id: any;
  song:Song| undefined;
  singerSongId: SingerSongId | undefined;
  formCreateSingerSong !: FormGroup;
  singers: Singer[] = [];
  openMessage:Boolean=false;

  constructor(private activatedRoute: ActivatedRoute,private singerService: SingerService, private singerSongService: SingerSongService, private router: Router) {
  }

  ngOnInit(): void {
    this.openMessage=false;
    this.formCreateSingerSong = new FormGroup({
      song_id: new FormControl(),
      singer_id: new FormControl(),
    })


    this.singerService.getAll().subscribe(data => {
      this.singers = data;
      this.id = this.activatedRoute.snapshot.paramMap.get('id');
      if (this.id != null) {
        this.formCreateSingerSong.patchValue({
          song_id: this.id,
        })
      }
    })

  }

  create() {
    this.openMessage=false;
    console.log(this.formCreateSingerSong.value);
    this.singerSongService.createSingerSong(this.formCreateSingerSong.value).subscribe((data) => {
      this.openMessage=true;
      this.formCreateSingerSong.patchValue({
        singer_id: null
      })
      // this.router.navigate(["/showCreateSongByAccount"]);
    })
  }

  changeStatus() {
    this.openMessage = false
  }

  back() {
    this.openMessage = false
    // this.router.navigate(["/showSong"]);
  }


}
