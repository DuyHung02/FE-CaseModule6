import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AccountToken} from "../../models/AccountToken";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) {
  }

  register(account: AccountToken): Observable<AccountToken> {
    return this.http.post<AccountToken>('http://localhost:8080/register/save', account)
  }

  login(username: String, password: String): Observable<AccountToken> {
    let user = {
      username: username,
      password: password
    }
    return this.http.post<AccountToken>('http://localhost:8080/login', user)
  }

  // editProfile(account: AccountToken, newAvatar : String | null) : Observable<AccountToken> {
  //   return this.http.post<AccountToken>('http://localhost:8080/account/profile/' + newAvatar, account)
  // }

  editProfile(account: AccountToken): Observable<AccountToken> {
    return this.http.post<AccountToken>('http://localhost:8080/account/profile', account)
  }

  saveAvatar(avatar: any, id: any): Observable<any> {
    let newAvatar = {
      avatar: avatar,
      id: id
    }
    return this.http.post<any>('http://localhost:8080/account/profile/avatar', newAvatar)
  }

}
