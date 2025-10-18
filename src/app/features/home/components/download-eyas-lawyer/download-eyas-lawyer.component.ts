import { Component, OnInit } from '@angular/core';
import AOS from "aos";
@Component({
  selector: 'app-download-eyas-lawyer',
  templateUrl: './download-eyas-lawyer.component.html',
  styleUrls: ['./download-eyas-lawyer.component.css']
})
export class DownloadEyasLawyerComponent implements OnInit {
  ngOnInit(): void {
    AOS.init({
      mirror: true,
    });
  }

}
