import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Component/header/header.component";
import { FooterComponent } from "./Component/footer/footer.component";
import { BreadcrumbComponent } from "./Component/breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, BreadcrumbComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TSRWS_ANGU';
}
