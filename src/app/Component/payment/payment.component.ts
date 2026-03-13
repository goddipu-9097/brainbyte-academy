import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { PaymentService } from '../../Services/payment.service';
declare var Razorpay: any;

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
 constructor(
  private router :Router
 ){}
paymentService=inject(PaymentService) // call api here 1. then inject
 user: any = {};   // 👈 yaha user object define karo

  ngOnInit() {

    let data = localStorage.getItem("registerUser");     // here data we get which we save in registrain page to show
  console.log("Data from localStorage:", data); // this add to  chek data in console browser
    if(data){
      this.user = JSON.parse(data);
    }

  }


// payNow(){

//   let data = {
// registrationId: this.user.registrationNo,
// amount: this.user.fee
// }
//   // inject payment service 1
//   this.paymentService.createOrder(data).subscribe((order:any)=>{

// var options={

// key:"YOUR_KEY",

// amount:order.amount,

// currency:"INR",

// order_id:order.id,

// handler:(response:any)=>{

// console.log(response)

// }

// }

// var rzp=new Razorpay(options)

// rzp.open()

// })
// }

    //  after payment verify also 
   

payNow(){

let data = {
registrationId:this.user.registrationNo,
amount:this.user.fee
}

this.paymentService.createOrder(data)
.subscribe((order:any)=>{

var options={

key:"rzp_test_xxxxx",

amount:order.amount,

currency:"INR",

order_id:order.id,

handler:(response:any)=>{

let paymentData={

registrationId:this.user.registrationNo,

amount:this.user.fee,

orderId:response.razorpay_order_id,

paymentId:response.razorpay_payment_id,

status:"Success"

}

this.paymentService.verifyPayment(paymentData)
.subscribe(res=>{

alert("Payment Successful")

this.router.navigate(['/user'])

})

}

}

var rzp=new Razorpay(options)

rzp.open()

})

}

}


