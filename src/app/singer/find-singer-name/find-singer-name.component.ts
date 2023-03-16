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
export class FindSingerNameComponent implements OnInit {
  singer: Singer | undefined;
  formFindSinger !: FormGroup;

  constructor(private singerService: SingerService, private router: Router) {
  }

  ngOnInit(): void {
    this.formFindSinger = new FormGroup({
      singer_name: new FormControl(),
    })
  }

  find() {
    this.singerService.findSingerBySinger_name(this.formFindSinger.value.singer_name).subscribe((data) => {
      this.singer = data;
      console.log(data);
      if (data != null) {
      } else {
        alert("Không tìm thấy ca sĩ");
      }
    })
  }

}
