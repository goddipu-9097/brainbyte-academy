import { HttpClient } from '@angular/common/http';// 1 automatic import when we use in constructor
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient // 1 changes

  )  { }
 
  private baseApiUrl = 'https://localhost:7213/api/Login';

  login(username: string, password: string) {
  return this.http.get(
    `${this.baseApiUrl}/Login?UserName=${username}&UserPassword=${password}`
  );
  
}

//   login(data: any) {
//   return this.http.post(this.baseApiUrl + '/Login', data);
// }


}
