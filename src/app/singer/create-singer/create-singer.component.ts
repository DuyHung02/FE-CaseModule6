import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {Singer} from "../../models/Singer";
import {SingerService} from "../../service/SingerService";

@Component({
  selector: 'app-create-singer',
  templateUrl: './create-singer.component.html',
  styleUrls: ['./create-singer.component.css']
})
export class CreateSingerComponent implements OnInit{
  id: any;
  singer: Singer | undefined;
  formCreateSinger !: FormGroup;

  constructor(private singerService: SingerService, private router: Router) {
  }

  ngOnInit(): void {
    this.formCreateSinger = new FormGroup({
      singer_name: new FormControl(this.singer?.singer_name),
      singer_gender: new FormControl(this.singer?.singer_gender),
      birthday: new FormControl(this.singer?.birthday),
      music_genre: new FormControl(this.singer?.music_genre),
      story: new FormControl(this.singer?.story),
      year: new FormControl(this.singer?.year),
      band: new FormControl(this.singer?.band),
      hot_music: new FormControl(this.singer?.hot_music),
      information: new FormControl(this.singer?.information),

    })
  }

  create() {
    console.log(this.formCreateSinger.value);
    this.singerService.createSong(this.formCreateSinger.value).subscribe((data) => {
      // this.router.navigate(["/show"]);
    })
  }
}
