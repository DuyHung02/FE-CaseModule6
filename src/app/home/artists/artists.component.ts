import {Component, OnInit} from '@angular/core';
import {Singer} from "../../models/Singer";
import {SingerService} from "../../service/SingerService";

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})




export class ArtistsComponent implements OnInit {

  singers: Singer [] = []


  constructor(private singerService: SingerService) {
  }

  ngOnInit(): void {
    this.getAll();

  }

  getAll(){
    this.singerService.getAllSingerNoPaging().subscribe((data) => {

      this.singers = data

    })
  }






}





