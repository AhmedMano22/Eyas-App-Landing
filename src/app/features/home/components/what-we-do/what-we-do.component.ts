import { Component, OnInit } from '@angular/core';
import AOS from "aos";
@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.css']
})
export class WhatWeDoComponent implements OnInit {
  ngOnInit() {
    AOS.init({
      mirror: true,
    });
  }

}
