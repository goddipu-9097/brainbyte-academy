import { Component, inject } from '@angular/core';
import { PaymentHistoryService } from '../../Services/payment-history.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment-history',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './payment-history.component.html',
  styleUrl: './payment-history.component.css'
})
export class PaymentHistoryComponent {
paymenthistory= inject(PaymentHistoryService)

paymentList:any=[]

user:any={}

ngOnInit(){

let data=localStorage.getItem("registerUser")

if(data){
this.user=JSON.parse(data)
}

this.paymenthistory // service inject 
.getPaymentHistory(this.user.registrationNo)
.subscribe((res:any)=>{

this.paymentList=res

})


}

}
