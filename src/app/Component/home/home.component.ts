import { AfterViewInit, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
declare var $: any;


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
// export class HomeComponent {
export class HomeComponent implements AfterViewInit {

  // ngAfterViewInit() {
  //   $('.owl-carousel').owlCarousel({  // declare $ 
  //     items: 1,
  //     loop: true,
  //     autoplay: true,
  //     autoplayTimeout: 3000,
  //     nav: true,
  //     dots: true
  //   });

  // }

 
//  ngAfterViewInit() {
//   setTimeout(() => {
//     $('.header-carousel').owlCarousel({
//       items: 1,
//       loop: true,
//       autoplay: true,
//       autoplayTimeout: 3000,
//       nav: true,
//       dots: true
//     });
//   }, 0);
// }

ngAfterViewInit(): void {
  setTimeout(() => {
    $('.header-carousel').owlCarousel({
      items: 1,
      loop: true,
      margin: 0,
      nav: true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 3000,
      smartSpeed: 1000,
      navText: [
        '<span class="owl-prev">&lt;</span>',
        '<span class="owl-next">&gt;</span>'
      ]
    });
  }, 0);
}
ngOnDestroy() {
  $('.header-carousel').trigger('destroy.owl.carousel');
}

}
