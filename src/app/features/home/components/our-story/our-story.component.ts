import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import AOS from "aos";

@Component({
  selector: 'app-our-story',
  templateUrl: './our-story.component.html',
  styleUrls: ['./our-story.component.css']
})
/**
 *
 */

export class OurStoryComponent implements OnInit{
  constructor(private modalService: NgbModal) { }
  ngOnInit(): void {
      AOS.init({
        mirror: false,
      });
  }

  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
  }
}
