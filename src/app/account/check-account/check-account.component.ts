import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AccountService} from "../../service/account/account.service";

@Component({
  selector: 'app-check-account',
  templateUrl: './check-account.component.html',
  styleUrls: ['./check-account.component.css']
})
export class CheckAccountComponent implements OnInit{

  constructor(private router : Router, private accountService : AccountService, private route : ActivatedRoute) {
  }

  id: any
  account!: any
  password!: String
  password2!: any

  ngOnInit(): void {
    // this.id = this.route.snapshot.paramMap.get('id')
    // @ts-ignore
    this.account = JSON.parse(localStorage.getItem('accountToken'))
    this.id = this.account.id
    console.log(this.id)
    // console.log(this.password2)
    this.accountService.getPassword(1).subscribe(data => {
      this.password2 = data + ""
      // console.log(this.password2)
      // console.log(data)
    }, error => {
      // console.log(this.password2)
    })
  }

  formCheckAccount: FormGroup = new FormGroup({
    password: new FormControl("")
  })

  checkAccount() {
    this.password = this.formCheckAccount.value
    if (this.password == this.password2) {
      this.router.navigate(['/changePassword'])
    } else {
      console.log(this.password2)
      alert("wrong password")
    }
  }

}
