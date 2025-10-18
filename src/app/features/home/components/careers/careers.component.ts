import { Component, OnInit } from '@angular/core';
import AOS from "aos";
@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {
  ngOnInit(): void {
    AOS.init({
      mirror: true,
    });
  }

}
