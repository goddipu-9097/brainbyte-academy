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
    let data = localStorage.getItem("userName");     // here data we get which we save in registrain page to show
  console.log("Data from localStorage:", data); // this add to  chek data in console browser
if(data){
// const userName = JSON.parse(JSON.stringify(data))
// this.paymentService.getRegistrationDetail(userName)
this.paymentService.getRegistrationDetail(data)
.subscribe({
  next:(res:any)=>{

console.log("User Detail",res)
// res.data[0].fee = 500
//this.user = res.data
this.user = res.data[0];   // object set

this.user.fee = 500;
},
error:(err)=>{
  console.log(err)
  debugger
}
})

}

}
    //

  


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
   

// payNow(){

// let data = {
// registrationId:this.user.registrationNo,
// amount:this.user.fee
// }

// this.paymentService.createOrder(data)
// .subscribe((order:any)=>{

// var options={

// key:"rzp_test_xxxxx",

// amount:order.amount,

// currency:"INR",

// order_id:order.id,

// handler:(response:any)=>{

// let paymentData={

// registrationId:this.user.registrationNo,

// amount:this.user.fee,

// orderId:response.razorpay_order_id,

// paymentId:response.razorpay_payment_id,

// status:"Success"

// }

// this.paymentService.verifyPayment(paymentData)
// .subscribe(res=>{

// alert("Payment Successful")

// this.router.navigate(['/user'])

// })

// }

// }

// var rzp=new Razorpay(options)

// rzp.open()

// })

// }


// new 
// payNow(){
// console.log("Pay button clicked");

// if(!this.user || !this.user.registrationId){
// alert("User data not loaded");
// return;
// }
// let data = {
// registrationId: this.user.registrationId,

// amount: this.user.fee

// }

// this.paymentService.createOrder(data)
// .subscribe((order:any)=>{

// var options = {

// // key: "rzp_test_SXPWLvw3QsIvv1",
// key: "rzp_live_SWAH1zH18wKlLJ",
// amount: order.amount,

// currency: "INR",

// name: "BrainByte Academy",

// description: "Course Fee Payment",

// order_id: order.id,

// handler: (response:any)=>{

// let paymentData = {

// registrationId: this.user.registrationNo,

// amount: this.user.fee,
// currency:"INR",

// orderId: response.razorpay_order_id,

// paymentId: response.razorpay_payment_id,

// signature: response.razorpay_signature,
// status : "Success"
// }

// this.paymentService.verifyPayment(paymentData)
// .subscribe(res=>{

// alert("Payment Successful")

// this.router.navigate(['/paymenthistory'])

// })

// },

// modal: {

// ondismiss: () => {
//   // save in database if payment cancel
//   let paymentData = {

// registrationId: this.user.registrationNo,
// amount: this.user.fee,
// currency:"INR",
// orderId: order.id,
// paymentId: "",
// signature:"",
// status:"Failed"

// }

// this.paymentService.verifyPayment(paymentData).subscribe()


// alert("Payment Cancelled")
// this.router.navigate(['/home'])

// }

// }

// }

// var rzp = new Razorpay(options)

// rzp.open()

// })
// }
      //working 
// payNow(){

// console.log("Pay button clicked");
// console.log("User Data:", this.user);

// if(!this.user || !this.user.registrationId){
// alert("Registration Id not found");
// return;
// }

// let data = {
// registrationId: this.user.registrationId,
// amount: this.user.fee
// }
// console.log("Registration Id:",this.user.registrationId)
// console.log("Fee:",this.user.fee)
// console.log("Order Request:",data);
// debugger //
// this.paymentService.createOrder(data)
// .subscribe((order:any)=>{

// console.log("Order Created:",order);

// var options = {

// key: "rzp_live_SWAH1zH18wKlLJ",

// amount: order.amount,

// currency: "INR",

// name: "BrainByte Academy",

// description: "Course Fee Payment",

// order_id: order.id,

// handler:(response:any)=>{

// let paymentData = {

// registrationId:this.user.registrationId,

// amount:this.user.fee,

// currency:"INR",

// orderId:response.razorpay_order_id,

// paymentId:response.razorpay_payment_id,

// signature:response.razorpay_signature,

// status:"Success"

// }
// debugger // use
// this.paymentService.verifyPayment(paymentData)
// .subscribe(res=>{

// alert("Payment Successful")
// this.router.navigate(['/paymenthistory'])

// })

// }

// }

// var rzp=new Razorpay(options)

// rzp.open()

// })

// }

 payNow(){

console.log("Pay button clicked");
console.log("User Data:", this.user);

if(!this.user || !this.user.registrationId){
alert("Registration Id not found");
return;
}

let data = {
registrationId: this.user.registrationId,
amount: this.user.fee
}

this.paymentService.createOrder(data)
.subscribe((order:any)=>{

console.log("Order Created:",order);
debugger
var options = {

key: "rzp_test_SbGPpRa0yxDMCJ",

amount: order.amount,

currency: "INR",

name: "BrainByte Academy",

description: "Course Fee Payment",

order_id: order.id,

prefill: {
name: this.user.name,
email: this.user.email || "test@gmail.com",
contact: this.user.mobile || "9999999999"
},

theme: {
color: "#3399cc"
},

handler:(response:any)=>{

console.log("Razorpay Response:",response);// use

let paymentData = {

registrationId:this.user.registrationId,
amount:this.user.fee,
currency:"INR",
orderId:response.razorpay_order_id,
paymentId:response.razorpay_payment_id,
signature:response.razorpay_signature,
status:"Success"

}
debugger
console.log("Payment Data Sending:",paymentData);//use

this.paymentService.verifyPayment(paymentData)
.subscribe(res=>{

alert("Payment Successful")

this.router.navigate(['/paymenthistory'])

})

},

modal:{
ondismiss:()=>{

let paymentData = {

registrationId:this.user.registrationId,
amount:this.user.fee,
currency:"INR",
orderId:order.id,
paymentId:"",
signature:"",
status:"Failed"

}

this.paymentService.verifyPayment(paymentData).subscribe()

alert("Payment Cancelled")

}
}

};

var rzp = new Razorpay(options);

rzp.open();

})

}

}


