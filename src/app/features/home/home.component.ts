import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  currentSection = 'home';
  isCondensed = false;
  // Set Topbar Option
  Menuoption = 'center';
  Settingicon = false
  windowScroll() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById('topnav').classList.add('nav-sticky');
    } else {
      document.getElementById('topnav').classList.remove('nav-sticky');
    }

    if (document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100) {
    } else {
    }
  }
  
  toggleMenu() {
    this.isCondensed = !this.isCondensed;
    if (this.isCondensed) {
      document.getElementById('navigation').style.display = 'block';
    } else {
      document.getElementById('navigation').style.display = 'none';
    }
  }
}
