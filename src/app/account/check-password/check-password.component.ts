import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AccountService} from "../../service/account/account.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-check-password',
  templateUrl: './check-password.component.html',
  styleUrls: ['./check-password.component.css']
})
export class CheckPasswordComponent implements OnInit{
  openMessage:Boolean=false;
  constructor(private router : Router, private accountService : AccountService, private route : ActivatedRoute) {
  }

  id: any
  account!: any
  password!: String
  password2!: String

  formCheckAccount: FormGroup = new FormGroup({
    password: new FormControl("")
  })

  ngOnInit(): void {
    // this.id = this.route.snapshot.paramMap.get('id')
    // @ts-ignore
    this.account = JSON.parse(localStorage.getItem('accountToken'))
    this.id = this.account.id
    console.log(this.id)
    this.accountService.getPassword(this.id).subscribe(data => {
      this.account = data
      this.password2 = this.account.password
    })
  }

  checkAccount() {
    this.password = this.formCheckAccount.value.password
    console.log(this.formCheckAccount.value.password)
    if (this.password == this.password2) {
      this.router.navigate(['/changePassword'])
    } else {
      this.openMessage = true;
    }
  }

  changeStatus() {
    this.openMessage = false;
  }

}
