import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Song} from "../../models/Song";
import {FormControl, FormGroup} from "@angular/forms";
import {SongService} from "../../service/SongService";
import {Router} from "@angular/router";
import {SingerSongService} from "../../service/SingerSongService";
import {SingerSongId} from "../../models/dto/SingerSongId";
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{

  @ViewChild('songAvatar', {static: true}) public avatarDom: ElementRef | undefined;

  song_id: any;
  account: any;
  account_id: any;
  song: Song | undefined;
  singerSongId: SingerSongId|undefined;

  showSongAvatar = ''
  selectImage : any | null

  constructor(private singerSongService: SingerSongService,private songService: SongService, private router: Router, private storage: AngularFireStorage) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.account= JSON.parse(localStorage.getItem("accountToken"))
    this.account_id = this.account.id;
    }

    formCreateSong: FormGroup = new FormGroup({
      account_id: new FormControl(),
      song_name: new FormControl(),
      description: new FormControl(),
      file_mp3: new FormControl(),
      song_avatar: new FormControl(),
      author: new FormControl(),
      posted: new FormControl(),
      album: new FormControl(),
      song_music_genre: new FormControl(),
    })

  upAvatarSong() {
    this.selectImage = this.avatarDom?.nativeElement.files[0];
    console.log(this.selectImage)
  }

  create() {
    this.songService.createSong(this.formCreateSong.value).subscribe((data) => {
      this.song=data;
      this.router.navigate(["createSingerSong/"+this.song?.id]);
    })
  }

}