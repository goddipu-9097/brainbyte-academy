import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule,RouterModule], // for solve ngif in html page use
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css'
})
// export class BreadcrumbComponent {
export class BreadcrumbComponent implements OnInit {
showBreadcrumb: boolean = true;  // here declare 
 pageTitle: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  // constructor(private router: Router, private route: ActivatedRoute) {
 //this.router.events
//     .pipe(filter(event => event instanceof NavigationEnd))
//     .subscribe(() => {

//       let currentRoute: ActivatedRoute | null = this.route.root;

//       // Traverse to deepest active child
//       while (currentRoute?.firstChild) {
//         currentRoute = currentRoute.firstChild;
//       }

//       if (currentRoute?.snapshot.data) {
//         this.pageTitle = currentRoute.snapshot.data['title'] ?? '';
//       } else {
//         this.pageTitle = '';
//       }

//       // Hide breadcrumb on home
//       this.showBreadcrumb = this.router.url !== '/home';
//     });
// }

  // }
      

ngOnInit(): void {

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateBreadcrumb();
      });

    // First load ke liye
    this.updateBreadcrumb();
  }
          // when i use this the in home breadcrum show after when we satrt impliment on home so comment this 
  
          // private updateBreadcrumb() {
  //   let currentRoute = this.route.root;

  //   while (currentRoute.firstChild) {
  //     currentRoute = currentRoute.firstChild;
  //   }

  //   this.pageTitle = currentRoute.snapshot.data['title'] ?? '';
  //   this.showBreadcrumb = this.router.url !== '/home';
  // }


  private updateBreadcrumb() {
  let currentRoute = this.route.root;

  while (currentRoute.firstChild) {
    currentRoute = currentRoute.firstChild;
  }

  this.pageTitle = currentRoute.snapshot.data['title'] ?? '';

  // Hide breadcrumb for home route
  const currentUrl = this.router.url.split('?')[0];

  this.showBreadcrumb = !(currentUrl === '/' || currentUrl === '/home');
}

}
