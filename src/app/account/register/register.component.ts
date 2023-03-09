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

  constructor(private accountService : AccountService, private router : Router) {
  }

  formRegister: FormGroup = new FormGroup({
    id: new FormControl(""),
    username: new FormControl(""),
    password: new FormControl(""),
    rePassword: new FormControl(""),
    phone_number: new FormControl(""),
  })

  checkPassword() {
    let pass = this.formRegister.value.password
    let repass = this.formRegister.value.rePassword
    console.log(pass)
    console.log(repass)
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
    if (this.checkPassword()) {
      this.accountService.register(account).subscribe(data => {
        location.replace('')
      }, error => {
        console.log(account)
        alert("false")
      })
    } else {
      alert("sai thong tin")
    }
  }
}
