import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { SongService } from 'src/app/service/SongService';
import {Router} from "@angular/router";
import {Song} from "../../models/Song";
import {FormControl, FormGroup} from "@angular/forms";
import {SingerSongId} from "../../models/dto/SingerSongId";
import {finalize} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Component({
  selector: 'app-create-song2',
  templateUrl: './create-song2.component.html',
  styleUrls: ['./create-song2.component.css']
})
export class CreateSong2Component implements OnInit {

  @ViewChild('song_avatar', {static: true}) public avatarDom: ElementRef | undefined;

  @ViewChild('file_mp3', {static: true}) public mp3Dom: ElementRef | undefined;

  constructor( private songService: SongService, private router: Router, private storage: AngularFireStorage) {
  }

  selectedImage: any = null;
  url_avatar = '';
  selectedMp3: any = null;
  url_mp3 = '';

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
      actives: new FormControl(),
    })
  }

  create() {
    this.formCreateSong.patchValue({
      song_avatar: this.url_avatar,
      file_mp3: this.url_mp3,
      actives: 1,
    })
    this.songService.createSong(this.formCreateSong.value).subscribe((data) => {
      this.song = data;
      this.router.navigate(["createSingerSong/" + this.song?.id]);
    })
  }

  upLoadFileImg() {
    this.selectedImage = this.avatarDom?.nativeElement.files[0];
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

  upLoadFileMp3() {
    this.selectedMp3 = this.mp3Dom?.nativeElement.files[0];
    this.submitMp3()
  }

  submitMp3() {
    if (this.selectedMp3 != null) {
      const filePathMp3 = this.selectedMp3.name;
      const fileRefMp3 = this.storage.ref(filePathMp3);
      this.storage.upload(filePathMp3, this.selectedImage).snapshotChanges().pipe(
        finalize(() => (fileRefMp3.getDownloadURL().subscribe(url => {
          this.url_mp3 = url;
          console.log(this.url_mp3)
        })))
      ).subscribe();
    }
  }
}
