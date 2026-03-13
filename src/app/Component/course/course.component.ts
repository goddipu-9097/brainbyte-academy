import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-course',
  standalone: true,
   imports: [RouterModule], //for redirct page first we import this
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
  // encapsulation: ViewEncapsulation.None
})
export class CourseComponent {
constructor(
  private router:Router
){}
}
