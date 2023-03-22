import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AccountService} from "../../service/account/account.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  openMessage:Boolean=false;
  constructor(private router: Router, private accountService: AccountService) {
  }

  id: any
  account: any
  password!: String

  formChangePassword: FormGroup = new FormGroup({
    password: new FormControl(null),
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
    if (this.formChangePassword.value.password != null) {
      if (this.checkPassword()) {
        this.password = this.formChangePassword.value.password
        console.log(this.password)
        this.accountService.savePassword(this.password, this.id).subscribe(data => {
          this.router.navigate(['/home'])
        }, error => {
          this.openMessage = true;
        })
      } else {
        this.openMessage = true;
      }
    } else {
      this.openMessage = true;
    }
  }

  changeStatus() {
    this.openMessage = false;
  }

}
