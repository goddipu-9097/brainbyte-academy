import { Data } from "@angular/router";

export interface RegistrationM {
    // step 11
    //same as response from api 
    id:number,
    studentId:string,
    student_Name:string,
    father_Name:string,
    mother_Name: string,
    date_of_Birth:Data,
    gender:string
    email:string,
    class_for_Admission:string,
    address:string,
    state:string,
    city:string,
    pincode:number,
    phone_No:number,
    profilePicture:string
// now again go to services page where method create  for step 12
}
