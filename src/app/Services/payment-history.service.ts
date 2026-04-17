import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentHistoryService {

  constructor(private http:HttpClient ) { }


  getPaymentHistory(registrationId:any){
return this.http.get(
'https://localhost:7213/api/Payment/GetStudentPayment/'+registrationId)
}

}
