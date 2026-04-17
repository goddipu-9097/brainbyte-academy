import { Routes } from '@angular/router';
import { RegistrationComponent } from './Component/registration/registration.component';
// 1.2when we export our component then it automatic import above this line 
// 1.3now run browser our components page display
      // add here for execute another page 1
      import { LoginComponent } from './Component/login/login.component';
import { UserRegistrationComponent } from './Component/user-registration/user-registration.component';
import { HomeComponent } from './Component/home/home.component';
import { EventsComponent } from './Component/events/events.component';
import { CourseComponent } from './Component/course/course.component';
import { GalleryComponent } from './Component/gallery/gallery.component';
import { ContactComponent } from './Component/contact/contact.component';
import { AboutComponent } from './Component/about/about.component';
import { PaymentComponent } from './Component/payment/payment.component';
import { PaymentHistoryComponent } from './Component/payment-history/payment-history.component';
import { ErrorPageComponent } from './Component/error-page/error-page.component';
import { AchievementComponent } from './Component/achievement/achievement.component';


// export const routes: Routes = [
//    {
//     path:"",component:RegistrationComponent , // 1. give here our components name which diplay on browser 
       
// } ,// in as a object form we use {}


// {
//     path:"dipu",component:RegistrationComponent
//  }
// ]; //in this []  array we declare our property


  export const routes: Routes = [
  {
    path: "",    // for default page open when blank
    // redirectTo: "login",

    redirectTo:"home",
    
    pathMatch: "full"
  },
  {
    path:"home",
    component:HomeComponent,
     data:{title:'Home'},
  
  },
  {
    path: "login",
    component: LoginComponent,
     data: { title: 'Login' }
  },
  {
    path: "registration",
    component: RegistrationComponent,
     data: { title: 'Registration' }
    
  },
  {
    path: "user",
    component:UserRegistrationComponent,
     data: { title: 'User' }
  
  },
  {
    path:"events",
    component:EventsComponent,
     data: { title: 'Event' }
  },
  {
    path:"course",
    component:CourseComponent,
     data: { title: 'Course' }
  },
  {
    path:"gallery",
    component:GalleryComponent,
     data: { title: 'Gallery' }
  },
  {
    path:"contact",
    component:ContactComponent,
     data: { title: 'Contact' }
  },
  {
    path:"about",
    component:AboutComponent,
     data: { title: 'About Us' }
  },
  {
path:"payment",
component:PaymentComponent,
data: { title: 'Payment' }
  },
   {
path:"paymenthistory",
component:PaymentHistoryComponent,
data: { title: 'PaymentHistory' }
  },
  {
path:"errorPage",
component:ErrorPageComponent,
data: { title: '404 Error Page' }
  },
  {
path:"achievement",
component:AchievementComponent,
data: { title: 'Achievement' }
  }

//   ,
//   {
//     path: "dipu",
//     component: RegistrationComponent
//   }
];
