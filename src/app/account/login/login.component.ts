import { Component } from '@angular/core';
import {AccountService} from "../../service/account/account.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private accountService : AccountService) {
  }

  formLogin : FormGroup = new FormGroup({
    username : new FormControl(""),
    password : new FormControl("")
  })

  account: any

  login() {
    let user = this.formLogin.value
    this.accountService.login(user.username, user.password).subscribe(data => {
      this.account = data
      localStorage.setItem("token", data.token + "")
      localStorage.setItem("accountToken", JSON.stringify(data))
      window.location.replace('')
    }, error => {
      alert("login false")
    })
  }
}
