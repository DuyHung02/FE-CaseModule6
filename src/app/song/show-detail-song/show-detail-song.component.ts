import {Component, OnInit} from '@angular/core';
import {Song} from "../../models/Song";
import {ActivatedRoute, Router} from "@angular/router";
import {SongService} from "../../service/SongService";
import {data} from "jquery";

@Component({
  selector: 'app-show-detail-song',
  templateUrl: './show-detail-song.component.html',
  styleUrls: ['./show-detail-song.component.css']
})
export class ShowDetailSongComponent implements OnInit{
  id: any;
  song!: Song;
  constructor(private activatedRouted: ActivatedRoute, private songService: SongService, private router: Router) {
  }
  ngOnInit(): void {
    this.id = this.activatedRouted.snapshot.paramMap.get('id');
    if(this.id!=null){
      this.songService.findById(+this.id).subscribe((data)=>{
        this.song = data
      })
    }
  }

}
