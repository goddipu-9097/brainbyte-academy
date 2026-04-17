import { AfterViewInit, Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],// used to redirect page 
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements AfterViewInit { // this is used for open image in full page
  constructor(private router:Router){} 
  
  ngAfterViewInit() {
    document.querySelectorAll('.popup-link').forEach((img: any) => {
      img.addEventListener('click', (e: any) => {
        e.preventDefault();

        let src = img.getAttribute('href');

        let popup = document.createElement('div');
        popup.classList.add('img-popup');

        popup.innerHTML = `
          <span class="close-btn">&times;</span>
          <img src="${src}">
        `;

        document.body.appendChild(popup);

        popup.querySelector('.close-btn')?.addEventListener('click', () => popup.remove());

        popup.addEventListener('click', (event: any) => {
          if (event.target.tagName !== 'IMG') {
            popup.remove();
          }
        });
      });
    });
  }
}
