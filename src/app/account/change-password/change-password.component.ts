import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import * as $ from "jquery/dist/jquery.slim";
import {AccountService} from "../../service/account/account.service";
import {data} from "jquery";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  constructor(private router : Router, private accountService : AccountService) {
  }

  id: any
  account: any
  password!: String

  formChangePassword: FormGroup = new FormGroup({
    Password: new FormControl(""),
    RePassword: new FormControl("")
  })

  checkPassword() {
    let pass = this.formChangePassword.value.password
    let repass = this.formChangePassword.value.rePassword
    if (pass == repass) {
      $("#checkPassword").text("✅")
      return true;
    } else {
      $("#checkPassword").text("❌")
      return false;
    }
  }

  changePassword() {
    // @ts-ignore
    this.account = JSON.parse(localStorage.getItem("accountToken"))
    this.id = this.account.id
    if (this.checkPassword()) {
      this.password = this.formChangePassword.value.password
      this.accountService.savePassword(this.password, this.id).subscribe(data => {
        this.router.navigate([''])
      })
    } else {
      alert("sai password")
    }
  }
}
