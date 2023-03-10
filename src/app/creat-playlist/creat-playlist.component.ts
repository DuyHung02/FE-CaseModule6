import {Component, OnInit} from '@angular/core';
import {PlayList} from "../Model/playList";
import {FormControl, FormControlName, FormGroup} from "@angular/forms";
import {CreatPlaylistService} from "../service/creat-playlist-service/creat-playlist.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-creat-playlist',
  templateUrl: './creat-playlist.component.html',
  styleUrls: ['./creat-playlist.component.css']
})
export class CreatPlaylistComponent implements OnInit {
  id: any;
  playlist: PlayList | undefined;
  formCreatPlayList!: FormGroup;

  constructor(private playListService: CreatPlaylistService, private router: Router) {
  }

  ngOnInit(): void {
    this.formCreatPlayList = new FormGroup({
        name: new FormControl(""),
        category: new FormControl(""),
        description: new FormControl(""),
        quantity: new FormControl(""),
        musician: new FormControl(""),
        created_at: new FormControl(""),
        updated_at: new FormControl("")
      }
    )
  }

  creat() {
    console.log(this.formCreatPlayList.value);
    this.playListService.createPlayList(this.formCreatPlayList.value).subscribe((data) => {
      // this.router.navigate(["/show"])
    })
  }

}
