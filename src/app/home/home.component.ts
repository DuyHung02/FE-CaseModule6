import {Component, OnInit, Output} from '@angular/core';
import {Song} from "../models/Song";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  songs: Song[] = []
  index: number = -1

  musicOn: boolean = false

  ngOnInit(): void {
  }

  addSong(songs: Song[]) {
    this.songs = songs
    this.musicOn = true
  }

  addIndex(index: number) {
    this.index = index
  }


}



