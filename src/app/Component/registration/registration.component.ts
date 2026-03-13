import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';  // latest 
import { FormBuilder, FormControlName, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegistrationM } from '../../Model/registration-m';
import { RegistrationSService } from '../../Services/registration-s.service';
         // view chield atomatic show here when we use @viewchild use for close model
// import { Component } from '@angular/core';   previous
@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule], // we use all three here for vlue capture steps 2.2
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
// export class RegistrationComponent {
export class RegistrationComponent implements OnInit{
  // step 6 form    (add 'implements OnInit'  --- it show error so we below declare ngOnInit)
 @ViewChild('myModal') modal:ElementRef | undefined; // this is used for type script for use close modal
// myModal work as selecter and we pick from html page where we define as #myModal
//modal is variable here to hold  
//and we sould say which type of property is used so we use :
// we use elementref type of property this is also core part so automatioc show in above import place
//  after define property (ElementRef)if wedeclare varible and denote datatype then initalay we define that its value or not if not then use undefine
          

          // for capture form value   steps 2.1  start   
registrationForm :FormGroup = new FormGroup({})
// 2.in import we use 3 formsmodule see above
//3. create method for capture all input value (below we create mthod setformstate)

        //stpe 12.1 form  -- declare varibale 
registrationList:RegistrationM[]=[];
        // take variable first and show its which type , so it is RegistrationM type, and again 
// that ask for import like previous so error solve
//then error show - to solve eerror we initialize this like []
         //stpe 12.2 form  -- call services 
         // create instance variable
regisServices = inject(RegistrationSService)
         // step 13 below  create method to use 'getRegistration()'

// add step 3 
//define here variable  
formvalue:any;
 //for step 4  now go to same place 'onsubmit'

        // value 2.4 create constructer for fb
   constructor(private fb:FormBuilder){

   }
   //step 7 form (after use above step 6  add  implements OnInit)
   ngOnInit(): void {
     this.setformstate()
    // step 15 form
    //paste here method which we create step -13
    this.getRegistration()
   }
//  step 8   go on services page  

//  open Moadl step-2  start -------
    // another method by javascript use id 
// openModal(){
//   const prodModal=document.getElementById('myModal');
//   if(prodModal!=null)
//   {
//     prodModal.style.display = 'block';
//   }
// }
         // another method as type script using viewchield
         //we call openmethod  first which we declare in html uring click() method then condition 
         openModal(){
  if(this.modal!=null)
  {
    this.modal.nativeElement.style.display='block'
  }
}

                  //  open Moadl step-2  end --------
         // close start 
    // for close we use view child --------

// closeModal(){
//    const prodModal=document.getElementById('myModal');
//   if(prodModal!=null)
//   {
//     prodModal.style.display = 'none';
//   } 
// }
                 // close end

closeModal(){    // call this method on html on button click 
  if(this.modal !=null)
    this.modal.nativeElement.style.display='none'
}

// value 2.3  create method for capture all input value


 setformstate(){
  this.registrationForm=this.fb.group({  // create constructer to solve error fb (above)
// now capture value  process
Student_Name:['',[Validators.required]],
Father_Name:['',[Validators.required]],
Mother_Name:['',[Validators.required]],
Date_of_Birth:['',[Validators.required]],
Gender:['',[Validators.required]],
Email:['',[Validators.required]],
Class_for_Admission:['',[Validators.required]],
Address:['',[Validators.required]],
State:['',[Validators.required]],
City:['',[Validators.required]],
Pincode:['',[Validators.required]],
Phone_No:['',[Validators.required]],
ProfilePicture:['',[Validators.required]]
  })
  // same name as itis in controllere we write -- note
  //  now step 3 form bind 

      // for bind form we should copy above (registrationForm)which we make object
      //   and  go to html page and make form tag step 3 (html page )
 }


      // step 4   create onsubmit method 
      

 onsubmit(){
// here capture all form value
console.log(this.registrationForm.value)
//for vapture value in html page we use FormControlName  html page step 5

                   //step 2 add 
// apply condion first 
if(this.registrationForm.invalid)
{
  alert("please fill the all record");
  return;
}
else{
   //define/take form value for store all value  step 3 up
    //step 4
  this.formvalue=this.registrationForm.value;
 
this.regisServices.addRegistrationDetail(this.formvalue).subscribe((res)=>{
  alert("regisstration add successful");
  this.registrationForm.reset();
  this.getRegistration();
  this.closeModal();
})

}
 }

// step 13 form - ccreate method to use
// getRegistration()
// {
//   this.regisServices.getAllRegistrationDetail().subscribe((res)=>{
//     this.registrationList=res;
// // now bind as a html
//     // for bind we changes some where, if we want to render all data in registrationList so we copy 'registrationList' from above
//     // go to html page   for step 14 
  
//   })
// }


getRegistration() {
  this.regisServices.getAllRegistrationDetail().subscribe((res: any) => {
    console.log("API Response:", res);
    
    // important change here
    this.registrationList = Array.isArray(res) ? res : res.data ?? [];
  });
}

           //  delete with out conformation start onclick event step 3

 deleteRegistration(studentId:string)
 {
 this.regisServices.deleteRegistrationDetail(studentId).subscribe((res)=>{
 alert("Detail deleted sucessful");
 this.getRegistration();
})
 }
//  delete with out conformation end
                     //  popup delete by conformation start

selectedStudentId: string = '';

openDeleteModal(studentId: string) {
  this.selectedStudentId = studentId;
}

confirmDelete() {
  this.regisServices.deleteRegistrationDetail(this.selectedStudentId)
    .subscribe(() => {
      alert('Record deleted successfully');
      this.getRegistration();
      this.selectedStudentId = '';
    });
}
                 //  popup conformation end

       // update start 
      //  updateRegistration(phone_No:number){

      //  }
}
