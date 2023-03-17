import {Component, OnInit} from '@angular/core';
import {Singer} from "../../models/Singer";
import {SingerService} from "../../service/SingerService";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-show-detail-singer',
  templateUrl: './show-detail-singer.component.html',
  styleUrls: ['./show-detail-singer.component.css']
})
export class ShowDetailSingerComponent implements OnInit{
  id: any;
  singer!:Singer;

  constructor(private activatedRoute: ActivatedRoute,private singerService: SingerService, private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id != null) {
      this.singerService.findById(+this.id).subscribe((data) => {
        this.singer = data;

      })
    }
  }

}
