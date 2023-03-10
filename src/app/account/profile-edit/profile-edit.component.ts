import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AccountService} from "../../service/account/account.service";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {finalize} from "rxjs";
import * as $ from "jquery/dist/jquery.slim"
import {data} from "jquery";


@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  @ViewChild('upLoadFile', {static: true}) public avatarDom: ElementRef | undefined;

  constructor(private accountService: AccountService, private storage: AngularFireStorage) {
  }

  account: any
  id: any
  formProfile!: FormGroup
  selectedImage: any = null;
  arrayPicture = '';

  ngOnInit(): void {
    // @ts-ignore
    this.account = JSON.parse(localStorage.getItem("accountToken"))
    console.log(this.account)
    this.formProfile = new FormGroup({
      id: new FormControl(this.account?.id),
      full_name: new FormControl(this.account?.full_name),
      username: new FormControl(this.account?.username),
      address: new FormControl(this.account?.address),
      gmail: new FormControl(this.account?.gmail),
      phone_number: new FormControl(this.account?.phone_number),
    })
    this.arrayPicture = this.account?.avatar
  }

  upLoadFileImg() {
    this.selectedImage = this.avatarDom?.nativeElement.files[0];
    this.submit()
  }

  submit() {
    this.id = this.account.id;
    if (this.selectedImage != null) {
      const filePath = this.selectedImage.name;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => (fileRef.getDownloadURL().subscribe(url => {
          this.arrayPicture = url + "";
          console.log(this.arrayPicture)
          this.accountService.saveAvatar(this.arrayPicture, this.id).subscribe(data => {
            console.log(data)
          })
        })))
      ).subscribe();
    }
  }

  edit() {
    this.account = this.formProfile.value
    this.accountService.editProfile(this.account).subscribe(data => {
      this.account = data
      localStorage.setItem("accountToken", JSON.stringify(data))
      console.log(data)
      location.replace('/profile')
    }, error => {
      console.log(this.account)
      alert("false")
    })
  }
}
