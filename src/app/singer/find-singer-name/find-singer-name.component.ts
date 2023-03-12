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

  constructor(private singerService: SingerService, private router: Router) {
  }

  ngOnInit(): void {
    this.formFindSinger = new FormGroup({
      singer_name: new FormControl(1),
    })
  }

  find() {
    this.singerService.findById(this.formFindSinger.value).subscribe((data) => {
      this.singer=data;
      console.log(data);
      // console.log(data);
      // this.router.navigate(["/show"]);
    })
  }
}
