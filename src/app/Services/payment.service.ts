import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient){}

createOrder(data:any){
return this.http.post("https://localhost:7213/api/Payment/CreatePaymentOrderrequest",data)

}

verifyPayment(data:any){
return this.http.post("https://localhost:7213/api/Payment/VerifyPayment",data)
}


getRegistrationDetail(regNo:any){
return this.http.get(
`https://localhost:7213/api/Payment/GetRegistrationDetail?registrationId=${regNo}`
)
}

}
