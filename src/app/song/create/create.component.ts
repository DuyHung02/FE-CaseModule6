import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Song} from "../../models/Song";
import {FormControl, FormGroup} from "@angular/forms";
import {SongService} from "../../service/SongService";
import {Router} from "@angular/router";
import {SingerSongService} from "../../service/SingerSongService";
import {SingerSongId} from "../../models/dto/SingerSongId";
import {finalize} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  @ViewChild('song_avatar', {static: true}) public avatarDom: ElementRef | undefined;

  constructor(private singerSongService: SingerSongService, private songService: SongService, private router: Router, private storage: AngularFireStorage) {
  }

  selectedImage: any = null;
  url_avatar = '';

  song_id: any;
  account: any;
  account_id: any;
  song: Song | undefined;
  formCreateSong !: FormGroup;
  singerSongId: SingerSongId | undefined;


  ngOnInit(): void {
    // @ts-ignore
    this.account = JSON.parse(localStorage.getItem("accountToken"))
    this.account_id = this.account.id;

    this.formCreateSong = new FormGroup({
      account_id: new FormControl(this.account_id),
      song_name: new FormControl(),
      description: new FormControl(),
      file_mp3: new FormControl(),
      song_avatar: new FormControl(),
      author: new FormControl(),
      posted: new FormControl(),
      album: new FormControl(),
      song_music_genre: new FormControl(),
    })
  }

  create() {
    this.formCreateSong.patchValue({
      song_avatar: this.url_avatar
    })
    this.songService.createSong(this.formCreateSong.value).subscribe((data) => {
      this.song = data;
      this.router.navigate(["createSingerSong/" + this.song?.id]);
    })
  }

  upLoadFileImg() {
    this.selectedImage = this.avatarDom?.nativeElement.files[0];
    console.log(this.selectedImage)
    this.submit()
  }

  submit() {
    if (this.selectedImage != null) {
      const filePath = this.selectedImage.name;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => (fileRef.getDownloadURL().subscribe(url => {
          this.url_avatar = url;
          console.log(this.url_avatar)
        })))
      ).subscribe();
    }
  }

}
