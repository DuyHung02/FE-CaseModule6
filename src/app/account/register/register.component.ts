import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AccountService} from "../../service/account/account.service";
import * as $ from "jquery/dist/jquery.slim"
import {Router} from "@angular/router";

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
    username: new FormControl(""),
    password: new FormControl(""),
    rePassword: new FormControl(""),
    full_name: new FormControl(""),
    phone_number: new FormControl(""),
    gender: new FormControl(""),
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
    if (!this.formRegister.value.username == null) {
      let account = this.formRegister.value
      if (this.check) {
        if (this.checkPassword()) {
          this.accountService.register(account).subscribe(data => {
            location.replace('/')
          }, error => {
            console.log(account)
            alert("false")
          })
        } else {
          alert("sai mat khau")
        }
      } else {
        alert("Tai khoan da ton tai")
      }
    } else {
      alert("Username khong hop le")
    }
  }


  check: boolean = false

  checkUsername() {
    let username = this.formRegister.value.username
    if (/^[a-zA-Z\-]+$/.test(<any>$("#username").val())) {
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
