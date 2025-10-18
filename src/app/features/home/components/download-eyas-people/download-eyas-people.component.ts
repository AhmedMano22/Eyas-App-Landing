import { Component, OnInit } from '@angular/core';
import AOS from "aos";

@Component({
  selector: 'app-download-eyas-people',
  templateUrl: './download-eyas-people.component.html',
  styleUrls: ['./download-eyas-people.component.css']
})
export class DownloadEyasPeopleComponent implements OnInit {
  ngOnInit(): void {
    AOS.init({
      mirror: true,
    });
  }

}
