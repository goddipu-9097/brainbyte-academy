import { HttpClient } from '@angular/common/http'; // automatic shoe by quick 1.1
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  
  constructor(
    private http: HttpClient // 1 changes   import here 
  ) { }

  private baseApiUrl = 'https://localhost:7213/api/Login/Save_User_SignUp_Detail';

   addUserRegistrationDetail(data:any)
 
 {

  return this.http.post(this.baseApiUrl,data)
  
 }
 

}
