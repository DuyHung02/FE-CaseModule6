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

  editProfile(account: AccountToken): Observable<AccountToken> {
    return this.http.post<AccountToken>('http://localhost:8080/account/profile', account)
  }

  saveAvatar(avatar: any, id: any): Observable<any> {
    let newAvatar = {
      avatar: avatar,
      id: id
    }
    return this.http.post<any>('http://localhost:8080/account/save/avatar', newAvatar)
  }

  getPassword(id: number | null): Observable<any>{
    return this.http.get<any>('http://localhost:8080/account/password/' + id)
  }

  savePassword(password: any, id: number) : Observable<any> {
    let newPassword = {
      password : password,
      id: id
    }
    return this.http.post<any>('http://localhost:8080/account/save/password', newPassword)
  }

}
