import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-achievement',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievement.component.html',
  styleUrl: './achievement.component.css'
})
export class AchievementComponent {
  constructor(private router:Router){}
selectedIndex: number = -1;
  zoom: boolean = false;

  images = [
    { src: 'assets/images/ceritificate1.jpg', name: 'Certificate 1', year: '2023' },
    { src: 'assets/images/ceritificate2.jpg', name: 'Certificate 2', year: '2023' },
    { src: 'assets/images/ceritificate3.jpg', name: 'Certificate 3', year: '2022' },
    { src: 'assets/images/certificate6.jpg', name: 'Certificate 4', year: '2022' },
    { src: 'assets/images/certificate8.jpg', name: 'Certificate 5', year: '2023' },
    { src: 'assets/images/certificate7.jpg', name: 'Certificate 6', year: '2023' },
    { src: 'assets/images/certificate5.jpg', name: 'Certificate 7', year: '2021' },
    { src: 'assets/images/c1.jpg', name: 'Certificate 8', year: '2022' },
    { src: 'assets/images/c2.jpg', name: 'Certificate 9', year: '2022' },
    { src: 'assets/images/c3.jpg', name: 'Certificate 10', year: '2021' },
    { src: 'assets/images/c4.jpg', name: 'Certificate 11', year: '2021' },
    { src: 'assets/images/c5.jpg', name: 'Certificate 12', year: '2020' },
    { src: 'assets/images/c6.jpg', name: 'Certificate 13', year: '2020' },
    { src: 'assets/images/c7.jpg', name: 'Certificate 14', year: '2020' },
    { src: 'assets/images/c8.jpg', name: 'Certificate 15', year: '2019' },
    { src: 'assets/images/c9.jpg', name: 'Certificate 16', year: '2019' },
    { src: 'assets/images/c10.jpg', name: 'Certificate 17', year: '2019' },
    { src: 'assets/images/c11.jpg', name: 'Certificate 18', year: '2018' },
    { src: 'assets/images/c12.jpg', name: 'Certificate 19', year: '2018' }
  ];

  openImage(index: number) {
    this.selectedIndex = index;
    this.zoom = false;
  }

  closeImage() {
    this.selectedIndex = -1;
    this.zoom = false;
  }

  nextImage() {
    this.selectedIndex = (this.selectedIndex + 1) % this.images.length;
    this.zoom = false;
  }

  prevImage() {
    this.selectedIndex =
      (this.selectedIndex - 1 + this.images.length) % this.images.length;
    this.zoom = false;
  }

  toggleZoom() {
    this.zoom = !this.zoom;
  }

  // Keyboard control
  @HostListener('document:keydown', ['$event'])
  handleKeyboard(event: KeyboardEvent) {
    if (this.selectedIndex === -1) return;

    if (event.key === 'ArrowRight') this.nextImage();
    if (event.key === 'ArrowLeft') this.prevImage();
    if (event.key === 'Escape') this.closeImage();
  }
}

