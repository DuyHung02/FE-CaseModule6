import {Component, OnInit} from '@angular/core';
import {PlaylistService} from "../../service/playlist/playlist.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AccountService} from "../../service/account/account.service";
import {SingerService} from "../../service/SingerService";
import {Singer} from "../../models/Singer";
import {Song} from "../../models/Song";

@Component({
  selector: 'app-detail-singer',
  templateUrl: './detail-singer.component.html',
  styleUrls: ['./detail-singer.component.css']
})
export class DetailSingerComponent implements OnInit{
  constructor(private route : ActivatedRoute, private router: Router, private singerService : SingerService) {
  }
  singer!: Singer
  singer_id: any
  songs: Song[] = []

  ngOnInit(): void {
    this.singer_id = this.route.snapshot.paramMap.get('id')
    this.singerService.findById(this.singer_id).subscribe(data => {
      this.singer = data
    })
  }

}
