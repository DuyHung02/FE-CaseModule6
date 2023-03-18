import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PlaylistService} from "../../service/playlist/playlist.service";
import {FormControl, FormGroup} from "@angular/forms";
import {finalize} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Component({
  selector: 'app-playlist-edit',
  templateUrl: './playlist-edit.component.html',
  styleUrls: ['./playlist-edit.component.css']
})
export class PlaylistEditComponent implements OnInit{

  @ViewChild('upLoadFile', {static: true}) public avatarDom: ElementRef | undefined;


  constructor(private route: ActivatedRoute, private router: Router, private playlistService: PlaylistService, private storage: AngularFireStorage) {
  }

  formPlaylist!: FormGroup
  playlist_id: any
  playlist: any

  arrayPicture = ''
  selectImagePlaylist: any = null

  ngOnInit(): void {
    this.playlist_id = this.route.snapshot.paramMap.get('id')
    this.playlistService.findPlaylistById(this.playlist_id).subscribe(data => {
      this.playlist = data
      this.formPlaylist = new FormGroup({
        id: new FormControl(this.playlist?.id),
        name: new FormControl(this.playlist?.name),
        active: new FormControl(this.playlist?.active),
        avatarPlaylist: new FormControl(this.playlist?.avatarPlaylist),
      })
      this.arrayPicture = this.playlist.avatarPlaylist
    })
  }

  upAvatarPlaylist() {
    this.selectImagePlaylist = this.avatarDom?.nativeElement.files[0];
    console.log(this.selectImagePlaylist)
    this.editAvatarPlaylist()
  }

  editAvatarPlaylist() {
    if (this.selectImagePlaylist != null) {
      const filePath = this.selectImagePlaylist.name;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectImagePlaylist).snapshotChanges().pipe(
        finalize(() => (fileRef.getDownloadURL().subscribe(url => {
          this.arrayPicture = url;
        })))
      ).subscribe();
    }
  }

  savePlaylist() {
    this.formPlaylist.patchValue({avatarPlaylist: this.arrayPicture})

    console.log(this.arrayPicture)
    this.playlist = this.formPlaylist.value
    let active = this.formPlaylist.value.active

    console.log(this.playlist);
    if (active != null) {
      this.playlistService.saveEditPlaylist(this.playlist).subscribe(data => {
        location.replace('/playlists')
      })
    } else {
      alert("choice mode")
    }
  }

}
