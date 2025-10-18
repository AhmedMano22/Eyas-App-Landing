import { Component, OnInit } from '@angular/core';
import AOS from "aos";
@Component({
  selector: 'app-law-dictionary',
  templateUrl: './law-dictionary.component.html',
  styleUrls: ['./law-dictionary.component.css']
})
export class LawDictionaryComponent implements OnInit {
  ngOnInit(): void {
    AOS.init({
      mirror: true,
    });
  }

}
