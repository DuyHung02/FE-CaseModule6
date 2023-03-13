import {Component, OnInit} from '@angular/core';
import {Singer} from "../../models/Singer";
import {FormControl, FormGroup} from "@angular/forms";
import {SingerService} from "../../service/SingerService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-find-singer-name',
  templateUrl: './find-singer-name.component.html',
  styleUrls: ['./find-singer-name.component.css']
})
export class FindSingerNameComponent implements OnInit{
  singer: Singer | undefined;
  formFindSinger !: FormGroup;
  formSinger !: FormGroup;

  constructor(private singerService: SingerService, private router: Router) {
  }

  ngOnInit(): void {
    this.formFindSinger = new FormGroup({
      singer_name: new FormControl("Tiến"),
      // singer_name: new FormControl(1),
    })


  }

  find() {
    this.singerService.findSingerBySinger_name(this.formFindSinger.value.singer_name).subscribe((data) => {
      this.singer=data;
      console.log(data);
      this.formSinger = new FormGroup({
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
      // console.log(data);
      // this.router.navigate(["/show"]);
    })

  }

}
