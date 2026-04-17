import { CommonModule } from '@angular/common';
import { Component ,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lightbox, LightboxModule } from 'ngx-lightbox';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule,LightboxModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
constructor(
  private router:Router,
  private lightbox:Lightbox
){}

albums: any[] = [];

  ngOnInit(): void {
    const images = [
      { src: 'assets/images/about2.jpg', caption: 'about2 1' },
    
      { src: 'assets/images/about3.jpg', caption: 'about3 2' },
      { src: 'assets/images/about4.jpg', caption: 'about4 3' },
      { src: 'assets/images/about5.jpg', caption: 'about5 4' },
      { src: 'assets/images/about7.jpg', caption: 'about7 5' },
      { src: 'assets/images/about8.jpg', caption: 'about8 6' },
      { src: 'assets/images/about9.jpg', caption: 'about9 5' },
      { src: 'assets/images/about10.jpg', caption: 'about10 6' }
    ];

    this.albums = images.map(img => ({
      src: img.src,
      thumb: img.src,
      caption: img.caption
    }));

    console.log("Albums loaded:", this.albums); // 👈 DEBUG
  }

  open(index: number): void {
    console.log("Opening index:", index); // 👈 DEBUG
    this.lightbox.open(this.albums, index);
  }

  close(): void {
    this.lightbox.close();
  }

}
