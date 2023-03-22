import {Component, OnInit} from '@angular/core';
import {Singer} from "../../models/Singer";
import {SingerService} from "../../service/SingerService";
import {Router} from "@angular/router";
import {Song} from "../../models/Song";
import {SongService} from "../../service/SongService";
import {SingerSongService} from "../../service/SingerSongService";
import {SingerSong} from "../../models/SingerSong";

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.css']
})
export class HeaderUserComponent implements OnInit {
  id: any;
  singer: Singer | undefined;
  song: Song | undefined;
  singerSongs: SingerSong[] = [];
  songs: Song[] = [];
  account: any;
  openMessage:Boolean=false;

  constructor(private singerSongService: SingerSongService, private songService: SongService, private singerService: SingerService, private router: Router) {
  }

  ngOnInit(): void {
    this.songService.find4NewSong().subscribe(data => {
      this.songs = data;
    })
    // @ts-ignore
    this.account = JSON.parse(localStorage.getItem("accountToken"))
    console.log(this.account)
  }

  logout() {
    window.localStorage.clear()
    window.location.replace('/')
  }

  findSinger() {
    const inputSinger = document.getElementById("search_input") as HTMLInputElement;
    const singerValue = inputSinger.value;
    this.singerService.findSingerBySinger_name(singerValue).subscribe((data) => {
      this.singer = data;
      console.log(data);
      if (data != null) {
        location.replace("/singerDetail/" + this.singer.id )
      } else {
        this.openMessage=true;
      }
    })
  }

  findSong() {
    const inputSong = document.getElementById("search_input") as HTMLInputElement;
    const songValue = inputSong.value;
    this.songService.findSongBySongName(songValue).subscribe((data) => {
      this.song = data;
      this.singerSongService.findSingerSongBySong_id(+this.id).subscribe(data => {
        this.singerSongs = data;
      })

      if (data != null) {
        location.replace("/showDetailSong/"+this.song.id)
      } else {
        this.openMessage=true;
      }
    })
  }

  changeStatus() {
    this.openMessage = false
  }


}
