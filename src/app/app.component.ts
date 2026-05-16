import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Component/header/header.component";
import { FooterComponent } from "./Component/footer/footer.component";
import { BreadcrumbComponent } from "./Component/breadcrumb/breadcrumb.component";
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, BreadcrumbComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TSRWS_ANGU';

  isAdminPage = false;

  constructor(private router: Router) {

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {

        this.isAdminPage =
          this.router.url.includes('/dashboard') ||
           this.router.url.includes('/profile') ||
          this.router.url.includes('/achievement') ||
          this.router.url.includes('/admin');

      });

  }

}
