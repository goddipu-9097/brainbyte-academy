import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterModule],// then use routerlink 2nd priority
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
constructor(
  private router:Router  // do this for route first
){}
}
