import { Component, OnInit } from '@angular/core';
import AOS from "aos";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  ngOnInit(): void {
    AOS.init({
      mirror: true,
    });
  }
  blogData = [
    {
      image: "assets/images/blog/01.jpg",
      title: "المحامين علي درجة عالية من الاحترافية و الكفاءة",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    },
    {
      image: "assets/images/blog/02.jpg",
      title: "إياس الحل الأمثل للتواصل بين العميل و المحامي",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    },
    {
      image: "assets/images/blog/03.jpg",
      title: "يساهم كثيرا في توفير الوقت و الجهد",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    }
  ];
}
