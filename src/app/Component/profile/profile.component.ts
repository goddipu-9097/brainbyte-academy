import { CommonModule } from '@angular/common';
import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
// import { SidebarComponent } from '../sidebar/sidebar.component';
// import { NavbarComponent } from '../navbar/navbar.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
//declare var window: any;  
// solve bootstap in model
import * as bootstrap from 'bootstrap';
import { MatPseudoCheckbox } from "@angular/material/core";
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, MatCardModule, MatIconModule, ReactiveFormsModule, MatPseudoCheckbox],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  //modal:any;   THIS IS FOR SINGEL MODEL
   // ADDRESS MODAL
  addressModal: any;

  // PERSONAL MODAL
  personalModal: any;

  EducationModal: any;

  @ViewChild('myModal') myModal!: ElementRef;
  @ViewChild('myModal2') myModal2!: ElementRef;
  @ViewChild('educationModal') educationModal!: ElementRef;
UserProfileForm:FormGroup=new FormGroup({})
constructor(private router:Router){}

 ngAfterViewInit(): void {
// Address Modal
    // this.modal = new bootstrap.Modal
    this.addressModal = new bootstrap.Modal(
      this.myModal.nativeElement,
     
    );
        // Personal Information Modal
    this.personalModal = new bootstrap.Modal(
      this.myModal2.nativeElement
    );

    // Personal Information Modal
    this.EducationModal = new bootstrap.Modal(
      this.educationModal.nativeElement
    );
  }
                            // Address Modal
   openprofileModal(){
    //  this.modal.show();
    this.addressModal.show();
   }
   closeprofileModal()
{
this.addressModal.hide();
}

                // Personal Information Modal
openPersonalInformationModal()
{
   this.personalModal.show();
}
ClosePersonalInformationModal()
{
this.personalModal.hide();
}

                       // Education Modal
openEducationModal(){
  this.EducationModal.show();
}
CloseEducationModal(){
  this.EducationModal.hide();
}
saveEducationModal(){
  
}
userProfilesubmit()
{

}

// openprofileModal()
// {
// this.modal = new window.bootstrap.Modal( // for boostrap declare above to solve error
//       this.myModal.nativeElement
//     );

//     this.modal.show();
// }

}
