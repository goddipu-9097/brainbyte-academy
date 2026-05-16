import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-course',
  standalone: true,
   imports: [RouterModule,CommonModule], //for redirct page first we import this
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
  // encapsulation: ViewEncapsulation.None
})
export class CourseComponent {
// selectedCategory: any;
constructor(
  private router:Router ){}

// selectCategory(category: string) {
//   this.selectedCategory = category;
// }
selectedCategory: string = 'popular';
  showCount: number = 6;

  categories = [
    { key: 'popular', name: 'Most Popular' },
    { key: 'ai', name: 'Generative AI' },
    { key: 'ml', name: 'AI & Machine Learning' },
    { key: 'marketing', name: 'Digital Marketing' },

     { key: 'cloud', name: 'Cloud Computing' },
    { key: 'b$l', name: 'Business and Leadership' },
    { key: 'sd', name: 'Software Development' },
    { key: 'isa', name: 'IT Service and Architecture' },
    { key: 'qm', name: 'Quality Management' },
    { key: 'dm', name: 'Digital Marketing' }
    // { key: 'ml', name: 'AI & Machine Learning' },
    // { key: 'marketing', name: 'Digital Marketing' }

  ];

  courses = [
    {
      title: 'MS Excel',
      category: 'popular',
      price: '350 Rs',
      image: 'assets/images/course5.jpg',
      teacher: 'Jewel Mathies',
      students: '2.4k',
      duration: '2 Months',
      time: '09:30 - 12:00'
    },
    {
      title: 'Python For Beginners',
      category: 'popular',
      price: 'Free',
      image: 'assets/images/course7.jpg',
      teacher: 'Noha Brown',
      students: '5.3k',
      duration: '2 Weeks',
      time: '10:00 - 11:00'
    },
    {
      title: 'MS Excel',
      category: 'popular',
      price: '350 Rs',
      image: 'assets/images/course5.jpg',
      teacher: 'Jewel Mathies',
      students: '2.4k',
      duration: '2 Months',
      time: '09:30 - 12:00'
    },
    {
      title: 'Python For Beginners',
      category: 'popular',
      price: 'Free',
      image: 'assets/images/course7.jpg',
      teacher: 'Noha Brown',
      students: '5.3k',
      duration: '2 Weeks',
      time: '10:00 - 11:00'
    },
    {
      title: 'Artificial Intelligence',
      category: 'ai',
      price: 'Free',
      image: 'assets/images/c14AI.jpg',
      teacher: 'Noha Brown',
      students: '5.3k',
      duration: '2 Weeks',
      time: '10:00 - 11:00'
    },
    {
      title: 'MS Excel',
      category: 'popular',
      price: '350 Rs',
      image: 'assets/images/course5.jpg',
      teacher: 'Jewel Mathies',
      students: '2.4k',
      duration: '2 Months',
      time: '09:30 - 12:00'
    },
    {
      title: 'Python For Beginners',
      category: 'popular',
      price: 'Free',
      image: 'assets/images/course7.jpg',
      teacher: 'Noha Brown',
      students: '5.3k',
      duration: '2 Weeks',
      time: '10:00 - 11:00'
    },
    {
      title: 'MS Excel',
      category: 'popular',
      price: '350 Rs',
      image: 'assets/images/course5.jpg',
      teacher: 'Jewel Mathies',
      students: '2.4k',
      duration: '2 Months',
      time: '09:30 - 12:00'
    },
    {
      title: 'Python For Beginners',
      category: 'popular',
      price: 'Free',
      image: 'assets/images/course7.jpg',
      teacher: 'Noha Brown',
      students: '5.3k',
      duration: '2 Weeks',
      time: '10:00 - 11:00'
    },
    {
      title: 'Cyber Security',
      category: 'ai',
      price: '350 Rs',
      image: 'assets/images/c13cyperSecurity.jpg',
      teacher: 'Jewel Mathies',
      students: '2.4k',
      duration: '2 Months',
      time: '09:30 - 12:00'
    },
     {
      title: 'Cyber Security',
      category: 'ai',
      price: '350 Rs',
      image: 'assets/images/c13cyperSecurity.jpg',
      teacher: 'Jewel Mathies',
      students: '2.4k',
      duration: '2 Months',
      time: '09:30 - 12:00'
    },
     {
      title: 'Cyber Security',
      category: 'ai',
      price: '350 Rs',
      image: 'assets/images/c13cyperSecurity.jpg',
      teacher: 'Jewel Mathies',
      students: '2.4k',
      duration: '2 Months',
      time: '09:30 - 12:00'
    },
    {
      title: 'Cyber Security',
      category: 'ai',
      price: '350 Rs',
      image: 'assets/images/c13cyperSecurity.jpg',
      teacher: 'Jewel Mathies',
      students: '2.4k',
      duration: '2 Months',
      time: '09:30 - 12:00'
    },
     {
      title: 'Cyber Security',
      category: 'ai',
      price: '350 Rs',
      image: 'assets/images/c13cyperSecurity.jpg',
      teacher: 'Jewel Mathies',
      students: '2.4k',
      duration: '2 Months',
      time: '09:30 - 12:00'
    },
     {
      title: 'Cyber Security',
      category: 'ai',
      price: '350 Rs',
      image: 'assets/images/c13cyperSecurity.jpg',
      teacher: 'Jewel Mathies',
      students: '2.4k',
      duration: '2 Months',
      time: '09:30 - 12:00'
    },
    {
      title: 'Cyber Security',
      category: 'ai',
      price: '350 Rs',
      image: 'assets/images/c13cyperSecurity.jpg',
      teacher: 'Jewel Mathies',
      students: '2.4k',
      duration: '2 Months',
      time: '09:30 - 12:00'
    },
     {
      title: 'Cyber Security',
      category: 'ai',
      price: '350 Rs',
      image: 'assets/images/c13cyperSecurity.jpg',
      teacher: 'Jewel Mathies',
      students: '2.4k',
      duration: '2 Months',
      time: '09:30 - 12:00'
    },
     {
      title: 'Cyber Security',
      category: 'ai',
      price: '350 Rs',
      image: 'assets/images/c13cyperSecurity.jpg',
      teacher: 'Jewel Mathies',
      students: '2.4k',
      duration: '2 Months',
      time: '09:30 - 12:00'
    },
    {
      title: 'Digital Marketing',
      category: 'marketing',
      price: '350 Rs',
      image: 'assets/images/c23businessMarketing.jpg',
      teacher: 'Jewel Mathies',
      students: '2.4k',
      duration: '2 Months',
      time: '09:30 - 12:00'
    }
  ];

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.showCount = 6;
  }

  get filteredCourses() {
    return this.courses.filter(c => c.category === this.selectedCategory);
  }

  showMore() {
    this.showCount += 3;
  }
}
