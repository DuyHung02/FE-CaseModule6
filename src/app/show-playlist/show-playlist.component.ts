import {Component, OnInit} from '@angular/core';
import {ShowService} from "../service/show-service/show.service";
import {PlayList} from "../Model/playList";

@Component({
  selector: 'app-show-playlist',
  templateUrl: './show-playlist.component.html',
  styleUrls: ['./show-playlist.component.css']
})
export class ShowPlaylistComponent implements OnInit{
  ListPlayList: PlayList[] = []

  constructor(public service_show_playlist: ShowService) {
  }

  getAllPlayList() {
    this.service_show_playlist.show_Playlist().subscribe((data)=>{
      this.ListPlayList = data;
    })
  }

  ngOnInit(): void {
    this.getAllPlayList()
  }
}
