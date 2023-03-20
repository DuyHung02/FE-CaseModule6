import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AccountService} from "../../service/account/account.service";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {FormControl, FormGroup} from "@angular/forms";
import {finalize} from "rxjs";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

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
      gender: new FormControl(this.account?.gender)
    })
    this.arrayPicture = this.account?.avatar
  }

  upLoadFileImg() {
    this.selectedImage = this.avatarDom?.nativeElement.files[0];
    console.log(this.selectedImage)
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
    if (this.check) {
      this.accountService.editProfile(this.account).subscribe(data => {
        this.account = data
        localStorage.setItem("accountToken", JSON.stringify(data))
        console.log(data)
        location.reload()
      }, error => {
        console.log(this.account)
        alert("false")
      })
    } else {
      alert("Gmail khong hop le")
    }
  }

  check: boolean = true

  checkGmail() {
    let gmail = this.formProfile.value.gmail
    console.log(gmail)
    this.id = this.account.id
    this.accountService.checkGmail(gmail, this.id).subscribe(data => {
      if (data) {
        $("#checkGmail").text("✅")
        this.check = true
      } else {
        $("#checkGmail").text("❌")
        this.check = false
      }
    })
  }

  validateEmail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(<any>$("#gmail").val())) {
      $("#checkGmail").text("✅")
      this.checkGmail()
    } else {
      $("#checkGmail").text("❌2")
      this.check = false
    }
  }


}
