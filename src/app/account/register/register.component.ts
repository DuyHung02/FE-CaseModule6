import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AccountService} from "../../service/account/account.service";
import {Router} from "@angular/router";
import * as $ from "jquery/dist/jquery.slim"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private accountService: AccountService, private router: Router) {
  }
  formRegister: FormGroup = new FormGroup({
    id: new FormControl(""),
    username: new FormControl(null),
    password: new FormControl(null),
    rePassword: new FormControl(null),
    full_name: new FormControl(""),
    phone_number: new FormControl(""),
    gender: new FormControl(null),
  })

  checkPassword() {
    let pass = this.formRegister.value.password
    let repass = this.formRegister.value.rePassword
    if (pass == repass) {
      $("#checkPassword").text("✅")
      return true;
    } else {
      $("#checkPassword").text("❌")
      return false;
    }
  }

  register() {
    let account = this.formRegister.value
    if (this.formRegister.value.username != null) {
      if (this.formRegister.value.password != null) {
        if (this.check) {
          if (this.checkPassword()) {
            if (this.formRegister.value.gender != null) {
              this.accountService.register(account).subscribe(data => {
                this.router.navigate(['/afterRegister'])
              }, error => {
                console.log(account)
                alert("false")
              })
            } else {
              alert("input gender")
            }
          } else {
            alert("wrong password")
          }
        } else {
          alert("Account already exists")
        }
      } else {
        alert("input password")
      }
    } else {
      alert("Invalid username")
    }
  }

  check: boolean = true

  checkUsername() {
    let username = this.formRegister.value.username
    if (/^[a-zA-Z0-9\-]+$/.test(<any>$("#username").val())) {
      this.accountService.checkUsername(username).subscribe(data => {
        if (data) {
          $("#checkUsername").text("✅")
          this.check = true
        } else {
          $("#checkUsername").text("❌")
          this.check = false
        }
      })
    } else {
      $("#checkUsername").text("❌")
      this.check = false
    }
  }

}
