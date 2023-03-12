import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import * as $ from "jquery/dist/jquery.slim";
import {AccountService} from "../../service/account/account.service";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit{

  constructor(private router : Router, private accountService : AccountService) {
  }

  id: any
  account: any
  password!: String

  formChangePassword: FormGroup = new FormGroup({
    password: new FormControl(),
    rePassword: new FormControl()
  })

  ngOnInit(): void {
    // @ts-ignore
    this.account = JSON.parse(localStorage.getItem("accountToken"))
    this.id = this.account.id
  }

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
    if (this.checkPassword()) {
      this.password = this.formChangePassword.value.password
      console.log(this.password)
      this.accountService.savePassword(this.password, this.id).subscribe(data => {
        alert("success")
        this.router.navigate([''])
      }, error => {
        alert("false")
      })
    } else {
      alert("sai password")
    }
  }
}
