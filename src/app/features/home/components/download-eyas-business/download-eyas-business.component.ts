import { Component } from '@angular/core';
import AOS from "aos";

@Component({
  selector: 'app-download-eyas-business',
  templateUrl: './download-eyas-business.component.html',
  styleUrls: ['./download-eyas-business.component.css']
})
export class DownloadEyasBusinessComponent {
  ngOnInit(): void {
    AOS.init({
      mirror: true,
    });
  }
}
