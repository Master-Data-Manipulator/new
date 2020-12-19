import { Component, OnInit } from '@angular/core';
import { RouterEvent, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: 'CERTIFICATIONS',
      url: '/menu/first'
    },
    {
      title: 'ADD CERTIFICATION',
      url: '/menu/second'
    },
    {
      title: 'EDIT CERTIFICATIONS',
      url: '/menu/third'
    },
    {
      title: 'PROFILE',
      url: '/menu/fourth'
    },
    {
      title: 'TERMS & CONDITIONS',
      url: '/menu/fith'
    },
    {
      title: 'PRIVACY',
      url: '/menu/sixth'
    },
    {
      title: 'HELP',
      url: '/menu/seventh'
    },
    {
      title: 'CUSTOMER SERVICE',
      url: '/menu/eigth'
    },
    {
      title: 'MESSAGES',
      url: '/menu/ninth'
    },
    {
      title: 'LOG OUT',
      url: '/menu/tenth'
    }
  ];

  selectedPath = '';


  constructor(private router: Router) { 
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
}
    
  ngOnInit() {
  }

}
