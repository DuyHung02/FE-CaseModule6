import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Singer} from "../../models/Singer";
import {FormControl, FormGroup} from "@angular/forms";
import {SingerService} from "../../service/SingerService";
import { Router } from '@angular/router';
import {finalize} from "rxjs";
import { AngularFireStorage } from '@angular/fire/compat/storage';
declare var $: any;

@Component({
  selector: 'app-create-singer',
  templateUrl: './create-singer.component.html',
  styleUrls: ['./create-singer.component.css']
})
export class CreateSingerComponent implements OnInit {
  singer: Singer | undefined;
  formCreateSinger !: FormGroup;
  selectedSinger: any = null;
  url_avatar = 'https://i.pinimg.com/564x/c5/23/fb/c523fb40f6fed78b783b83475c8588e8.jpg';
  openMessage:Boolean=false;

  @ViewChild('singer_avatar', {static: true}) public avatarDom: ElementRef | undefined;
  constructor(private singerService: SingerService, private router: Router, private storage: AngularFireStorage) {
  }



  ngOnInit(): void {
    this.openMessage=false;
    this.formCreateSinger = new FormGroup({
      singer_name: new FormControl(),
      singer_avatar: new FormControl(),
      singer_gender: new FormControl(),
      birthday: new FormControl(),
      music_genre: new FormControl(),
      story: new FormControl(),
      year: new FormControl(),
      band: new FormControl(),
      hot_music: new FormControl(),
      information: new FormControl(),

    })
  }

  upLoadFileSinger() {
    this.selectedSinger = this.avatarDom?.nativeElement.files[0];
    this.submit()
  }

  submit() {
    this.openMessage=false;
    if (this.selectedSinger != null) {
      const filePath = this.selectedSinger.name;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedSinger).snapshotChanges().pipe(
        finalize(() => (fileRef.getDownloadURL().subscribe(url => {
          this.url_avatar = url;

        })))
      ).subscribe();
    }
  }

  create() {
    console.log(this.url_avatar);
    this.formCreateSinger.patchValue({
      singer_avatar: this.url_avatar,
    })

    if (this.formCreateSinger.value.singer_name!=null&&this.formCreateSinger.value.singer_name!=""){
    console.log(this.formCreateSinger.value);
    this.singerService.createSinger(this.formCreateSinger.value).subscribe((data) => {
      this.openMessage=true;
      this.formCreateSinger.reset();
    })
      }else {$("#checkSingerName").text("Enter name")}
  }

  changeStatus() {
    this.openMessage = false
  }

  back() {
    this.openMessage = false
    location.replace('/showSinger')
  }

  checkName() {
    if (this.formCreateSinger.value.singer_name!=null&&this.formCreateSinger.value.singer_name!="") {
      $("#checkSingerName").text("")
    } else {
      $("#checkSingerName").text("Enter name")
    }
  }

}
