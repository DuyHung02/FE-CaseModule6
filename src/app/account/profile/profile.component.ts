import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  account: any
  showAvatar = ''

  ngOnInit(): void {
    // @ts-ignore
    this.account = JSON.parse(localStorage.getItem("accountToken"))
    this.showAvatar = this.account.avatar
    console.log(this.account)
  }

}
