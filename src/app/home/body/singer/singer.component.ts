import {Component, OnInit} from '@angular/core';
import {Singer} from "../../../models/Singer";
import {SingerService} from "../../../service/SingerService";

@Component({
  selector: 'app-singer',
  templateUrl: './singer.component.html',
  styleUrls: ['./singer.component.css']
})
export class SingerComponent implements OnInit {

  singers: Singer [] = []
  p: number = 1;
  total: number = 0;

  constructor(private singerService: SingerService) {
  }

  ngOnInit(): void {
    this.getAll();

  }

  getAll(){
    this.singerService.getAll(this.p).subscribe((data) => {
      this.singers = data
      this.total = data.length;

    })
  }



  pageChangeEvent(event: number){
    this.p = event;
    this.getAll();
  }


}
