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
  account: any

  constructor(private singerSongService: SingerSongService, private songService: SongService, private singerService: SingerService, private router: Router) {
  }

  ngOnInit(): void {
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
        location.replace("/detail/" + this.singer.id + "?type=singer")
      } else {
        alert("Không tìm thấy ca sĩ");
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
        alert("Không tìm thấy bài hát");
      }
    })

  }


}
