import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RegistrationM } from '../Model/registration-m';// herer import step 11 create method automatic generate

@Injectable({
  providedIn: 'root'
})
export class RegistrationSService {

  // step 8 
  private apiurl='https://localhost:7213/api/TSRWSDetail/Get_Registeration_Detail'

  constructor() { }

  http = inject(HttpClient)
  // for step 9 go to config.ts for we use one more provider to use httpsclient  step 9

 //step 10  write method

 getAllRegistrationDetail(){
  // define model here in model registration-m.ts  step 11 
 return this.http.get<RegistrationM[]>(this.apiurl)   // herre show error when copy from model interface step 12
 // solve error click on error red line click on quick fix and tell to import we should import that   
 }
 //  step 12 go to registration.component.ts page   to chek data get or not



   
                     // add start  step 1 add

                     
 private regisapiurl='https://localhost:7213/api/TSRWSDetail/Save_Registeration_Detail'
 
 addRegistrationDetail(data:any)
 // we need some parameter and  define parameter as name 'data' which is 'any' type
 // in 'any' all data type come objects ,arry of objectsetc
 {

  return this.http.post(this.regisapiurl,data)
  // note -- in post method always pass two parameter 1.this.apiurl and 2. data
  // this is services by which we send data 
  // and from wher we send data ? then  we send data from my component which avilable in components.ts page
 }
 // for step 2 go to components.ts page 
 // onsubmit method where we write impliment  

          // delete

 // ✅ DELETE (Soft delete by StudentUniqId)
  //step 1
//   private baseApiUrl = 'https://localhost:7213/api/TSRWSDetail/Delete_Registeration_Detail?StudentUniqId=STU1991M8798'


private baseApiUrl = 'https://localhost:7213/api/TSRWSDetail';

deleteRegistrationDetail(studentUniqId: string) {
  return this.http.delete(
    `${this.baseApiUrl}/Delete_Registeration_Detail/${studentUniqId}`
  );
   // for step 2 on html page for clickevent
}


  // ✅ UPDATE
  //  updateRegistrationDetail(registration: RegistrationM) {
  //   return this.http.put(
  //    `${this.regisapiurl}/UpdateRegistrationDetail/${registration.phone_No}`,
  //     registration
  //   );
  //  }
}
