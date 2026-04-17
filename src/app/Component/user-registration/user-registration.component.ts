import { AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRegistrationService } from '../../Services/user-registration.service';
declare var window: any;
@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [ReactiveFormsModule],// solve form group error 2.1change
 
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
 //export class UserRegistrationComponent implements OnInit {   // 1 change
export class UserRegistrationComponent implements OnInit, AfterViewInit{

@ViewChild('myModal') modal!: ElementRef;
  modalInstance: any;


 router = inject(Router); // for route 
 userservices = inject(UserRegistrationService)

userRegistrationForm: FormGroup = new FormGroup({});

  private openModalFlag = false;
constructor(
    private route: ActivatedRoute  ) {
    this.route.queryParams.subscribe(params => {
      this.openModalFlag = params['openModal'] === 'true';
    });
  }
 ngOnInit(): void {

  this.userRegistrationForm = new FormGroup({
    name: new FormControl('', Validators.required),
    userName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    mobile: new FormControl('', Validators.required),
    aadhar: new FormControl('', Validators.required),
     course: new FormControl('', Validators.required),
     
  });

}
  ngAfterViewInit(): void {
  if (this.openModalFlag) {
    setTimeout(() => {
      this.openuserregistrationmodal();
    }, 200);
  }
}

openuserregistrationmodal() {
  this.modalInstance = new window.bootstrap.Modal(
    this.modal.nativeElement
  );
  this.modalInstance.show();
}


closeUserRegistrationModal() {
  this.router.navigate(['/login']); // or '/', '/home' // close and go to login page
}
// userRegistrationonsubmit() {

  
// }
// userRegistrationonsubmit() {

//   if(this.userRegistrationForm.valid){

//     this.userservices.addUserRegistrationDetail(this.userRegistrationForm.value).subscribe((res:any)=>{

//       alert("Registration Successful");
// // sed data


// let userData={
// name:this.user.name,
// registrationNo:"REG12345",
// course:this.user.course,
// fee:500
// }

// localStorage.setItem("registerUser",JSON.stringify(userData))


//       // Redirect to payment page
//       this.router.navigate(['/payment']);

//     })

//   }

// }

// when we payment add to send data 
userRegistrationonsubmit() {
  console.log('userRegistrationForm', this.userRegistrationForm) // log use

  if (this.userRegistrationForm.valid) {

    this.userservices.addUserRegistrationDetail(this.userRegistrationForm.value)
      .subscribe((res: any) => {

        alert("Registration Successful");

        // Form se data lo
        let formData = this.userRegistrationForm.value;

        let userData = {
          name: formData.name,
          //registrationNo: "REG12345",
          registrationNo: formData.RegistrationId,
          course: formData.course,
          fee: 500
        };
console.log("Saving userData:", userData);// thi add for check data in console browser
        localStorage.setItem("userName", this.userRegistrationForm.value.userName); // here data save for in  payment page show

        // Redirect to payment page
        this.router.navigate(['/payment']);

      });

  }

}
}
