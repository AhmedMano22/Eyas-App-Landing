import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import AOS from "aos";
@Component({
  selector: 'app-users-stories',
  templateUrl: './users-stories.component.html',
  styleUrls: ['./users-stories.component.css']
})
export class UsersStoriesComponent implements OnInit {
  ngOnInit(): void {
    AOS.init({
      mirror: true,
    });
  }
  customOptions: OwlOptions = {
    // loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    rtl: true,
    margin: 15,
    navSpeed: 200,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      900: {
        items: 3
      }
    },
    nav: false
  };
  testimonialData = [
    {
      profile: "assets/images/client/01.jpg",
      name: "Thomas Anderson",
      designation: "C.E.O",
      message: `"سهل و سريع "`
    },
    {
      profile: "assets/images/client/02.jpg",
      name: "Barbara McIntosh",
      designation: "M.D",
      message: `"تجربة جيدة للغاية "`
    },
    {
      profile: "assets/images/client/03.jpg",
      name: "Carl Oliver",
      designation: "P.A",
      message: `"خدمات ممتازة "`
    },
    {
      profile: "assets/images/client/04.jpg",
      name: "Christa Smith",
      designation: "Manager",
      message: `" التطبيق الأفضل للاستشارة القانونية"`
    },
    {
      profile: "assets/images/client/05.jpg",
      name: "Dean Tolle",
      designation: "Developer",
      message: `" سلاسة في الااستخدامة "`
    },
    {
      profile: "assets/images/client/06.jpg",
      name: "Jill Webb",
      designation: "Designer",
      message: `" المحامين علي قدر كبير من الكفاءة"`
    }
  ];
}
