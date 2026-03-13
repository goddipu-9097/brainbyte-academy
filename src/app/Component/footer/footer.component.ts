import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
constructor(
  private router:Router
)
{

}
  // gotologin()
  // {
  //   this.router.navigate(['UserRegistration'])
  // }
}
