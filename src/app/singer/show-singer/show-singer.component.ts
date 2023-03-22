import {Component, OnInit, Output} from '@angular/core';
import {Singer} from "../../models/Singer";
import {SingerService} from "../../service/SingerService";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-show-singer',
  templateUrl: './show-singer.component.html',
  styleUrls: ['./show-singer.component.css']
})
export class ShowSingerComponent implements OnInit{
  singers: Singer[] = [];
  singer: Singer | undefined;
  formFind !: FormGroup;


  constructor(private singerService: SingerService, private router: Router) {
  }

  ngOnInit(): void {
    this.singerService.getAll().subscribe(data => {
      this.singers = data;
    })
    this.formFind = new FormGroup({
      singer_name: new FormControl(),
    })
  }

  find() {
    this.singerService.findSingerBySinger_name(this.formFind.value.singer_name).subscribe((data) => {
      this.singer = data;
      if (data != null) {
        location.replace("/detail/"+this.singer.id+"?type=singer")
      } else {
        alert("Không tìm thấy ca sĩ");
      }
    })
  }

}
