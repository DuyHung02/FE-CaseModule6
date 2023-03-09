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

  login(username : String, password : String) : Observable<AccountToken> {
    let user = {
      username : username,
      password : password
    }
    return this.http.post<AccountToken>('http://localhost:8080/login', user)
  }
}
