import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
constructor(
  private router:Router
){}
}
