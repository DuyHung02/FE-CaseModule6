import {Component, OnInit} from '@angular/core';
import {Singer} from "../../models/Singer";
import {SingerService} from "../../service/SingerService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.css']
})
export class HeaderUserComponent implements OnInit {
  singer: Singer | undefined;
  account: any

  constructor(private singerService: SingerService, private router: Router) {
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

  findSinger(){
    const inputSinger = document.getElementById("search_input") as HTMLInputElement;
    const singerValue = inputSinger.value;
    this.singerService.findSingerBySinger_name(singerValue).subscribe((data) => {
      this.singer = data;
      console.log(data);
      if (data != null) {
        location.replace("/detail/"+this.singer.id+"?type=singer")
      } else {
        alert("Không tìm thấy ca sĩ");
      }
    })
  }

  findSong(){

  }


}
