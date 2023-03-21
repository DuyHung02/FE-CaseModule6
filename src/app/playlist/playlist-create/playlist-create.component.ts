import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PlaylistService} from "../../service/playlist/playlist.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {FormControl, FormGroup} from "@angular/forms";
import {finalize} from "rxjs";

@Component({
  selector: 'app-playlist-create',
  templateUrl: './playlist-create.component.html',
  styleUrls: ['./playlist-create.component.css']
})
export class PlaylistCreateComponent implements OnInit{

  @ViewChild('upLoadFile', {static: true}) public avatarDom: ElementRef | undefined;

  constructor(private playlistService: PlaylistService, private router: Router, private route: ActivatedRoute, private storage: AngularFireStorage) {
  }

  account: any
  account_id: any
  id: any = null
  arrayPicture = 'https://i.pinimg.com/564x/f5/9d/c3/f59dc328a644de08da19fb0900a9261f.jpg'
  selectImage: any = null

  ngOnInit(): void {
    // @ts-ignore
    this.account = JSON.parse(localStorage.getItem("accountToken"))
    this.account_id = this.account.id
  }

  formPlaylist: FormGroup = new FormGroup({
    name: new FormControl,
    active: new FormControl
  })

  upAvatarPlaylist() {
    this.selectImage = this.avatarDom?.nativeElement.files[0];
    console.log(this.selectImage)
    this.avatarPlaylist()
  }

  avatarPlaylist() {
    if (this.selectImage != null) {
      const filePath = this.selectImage.name;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectImage).snapshotChanges().pipe(
        finalize(() => (fileRef.getDownloadURL().subscribe(url => {
          this.arrayPicture = url;
        })))
      ).subscribe();
    }
  }

  savePlaylist() {
    this.id = this.route.snapshot.paramMap.get('id')
    let name = this.formPlaylist.value.name
    let active = this.formPlaylist.value.active
    let avatarPlaylist = this.arrayPicture

    console.log(avatarPlaylist)
    if (active != null) {
      this.playlistService.savePlaylist(this.account_id, name, active, avatarPlaylist).subscribe(data => {
        if (this.id == null) {
          location.replace('/playlists/0?type=playlistsUser')
        } else {
          this.router.navigate(['/songs'])
        }
      })
    } else {
      alert("choice mode")
    }
  }

}
