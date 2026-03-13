import { AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';  //click on oninit 
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms"; // click on formgroup for quick fix
import { Router, RouterLink } from "@angular/router";// for redirect after login 
import { LoginService } from '../../Services/login.service';
import { UserRegistrationService } from '../../Services/user-registration.service';
import { MatIconModule } from '@angular/material/icon'; // this is for angualar material also import in component
import { GeteratecaptchaService } from '../../Services/geteratecaptcha.service';
//import bootstrap from 'bootstrap';
declare var window: any; // declare here when we global declare bootstrap in styles
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink,ReactiveFormsModule,MatIconModule], //2.1 here add to solve formgroup
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
// export class LoginComponent {   1.1 change
  // export class LoginComponent implements OnInit{
  export class LoginComponent implements OnInit, AfterViewInit { //'AfterViewInit' is used for captcha call 
     getcaptchaText = '';
    // Geteratecaptcha=inject(GeteratecaptchaService)
// click on red for quickfix for import create automatic above 
//loginServices = inject(LoginService) // quick  for login event when we cal services first

router = inject(Router);  // for redirect agter login 1
// @ViewChild('myModal') modal:ElementRef | undefined;  //3 change  for close modal
 //@ViewChild('myModal') modal!: ElementRef;
 @ViewChild('myModal', { static: false }) modal!: ElementRef;
 modalInstance: any;
 
userRegistrationservices=inject(UserRegistrationService)
loginForm :FormGroup = new FormGroup({})  //2 change form group use in html 
UserRegistrationForm:FormGroup=new FormGroup ({})

constructor(
  private generateCaptcha:GeteratecaptchaService,
  private loginServices:LoginService
){}
  ngAfterViewInit(): void {
  this.refreshcaptha();
}
   ngOnInit(): void {

  // LOGIN FORM
  this.loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    captcha: new FormControl(''),
     
  });

  // USER REGISTRATION FORM (MODAL)
  this.UserRegistrationForm = new FormGroup({
    name: new FormControl('', Validators.required),
    userName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    mobile: new FormControl('', Validators.required),
    aadhar: new FormControl('')
  });

}

clearusername()
{

}
clearmobile()
{

}

openuserregistrationmodal() {
  this.modalInstance = new window.bootstrap.Modal(
    this.modal.nativeElement
  );
  this.modalInstance.show();
}

closeUserRegistrationModal() {
  if (this.modalInstance) {
    this.modalInstance.hide();
  }
}
userRegistrationonsubmit() {

  // validation
  if (this.UserRegistrationForm.invalid) {
    alert("Please fill all required fields");
    this.UserRegistrationForm.markAllAsTouched();
    return;
  }
  // capture form value
  const formData = this.UserRegistrationForm.value;
  console.log(formData);

  // call service
  this.userRegistrationservices
    .addUserRegistrationDetail(formData)
    .subscribe({
      next: (res: any) => {
        alert("Registration added successfully");

        // reset form
        this.UserRegistrationForm.reset();

        // close modal
        this.closeUserRegistrationModal();
        // form valid hone ke baad redirect
  this.router.navigate(['/payment']);
      },
      error: (err) => {
        console.error(err);
        alert("Something went wrong. Please try again.");
      }
    });
}

// login() {
//   debugger
//   this.loginServices.login( // inject loginservice 
//     this.loginForm.value.username,
//     this.loginForm.value.password
//   ).subscribe(res => console.log(res));
// }

        // another method

// login() { // validation chek
//   if (this.loginForm.invalid) {
//     this.loginForm.markAllAsTouched();
//     return;
//   }

//   this.loginServices.login(
//     this.loginForm.value.username,
//     this.loginForm.value.password
//   ).subscribe(res => console.log(res));
// }
      // redirect after sucess 
// login() {
//   if (this.loginForm.invalid) {
//     this.loginForm.markAllAsTouched();
//     return;
//   }

//   this.loginServices.login(
//     this.loginForm.value.username,
//     this.loginForm.value.password
//   ).subscribe({
//     next: (res: any) => {
//       console.log('Login success', res);

//       // ✅ redirect to registration page
//       this.router.navigate(['/registration']);
//     },
//     error: (err) => {
//       console.error('Login failed', err);
//       alert('Invalid username or password');
//     }
//   });
// }

         // validation chek

login() {
  if (this.loginForm.invalid) {
    this.loginForm.markAllAsTouched();
    return;
  }

  this.loginServices.login(
    this.loginForm.value.username,
    this.loginForm.value.password
  ).subscribe({
    next: (res: any) => {

      // ✅ SUCCESS
      alert('Login successful');

      // ✅ redirect after alert
      this.router.navigate(['/registration']);
    },
    error: (err) => {

      // ❌ FAILURE
      alert('Login failed. Invalid username or password');
    }
  });
}


loginByPhone()
{

}

refreshcaptha()
{
   this.getcaptchaText =  this.generateCaptcha.refreshcaptha() // define'generateCaptcha' in constructor after inject services
    this.genImgcap()

}

  genImgcap(){
    let canvas: any = document.getElementById("capCan");
   let ctx = canvas.getContext("2d");
   ctx.font = "30px Arial";
   ctx.clearRect(0, 0, 240, 60);
   ctx.textAlign = "center";
   ctx.fillText(this.getcaptchaText, 140, 35);
   canvas.oncontextmenu = function() {return false};
  }


}
