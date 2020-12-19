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
      url: '/menu/first'
    },
    {
      title: 'TERMS & CONDITIONS',
      url: '/menu/first'
    },
    {
      title: 'PRIVACY',
      url: '/menu/first'
    },
    {
      title: 'HELP',
      url: '/menu/first'
    },
    {
      title: 'CUSTOMER SERVICE',
      url: '/menu/first'
    },
    {
      title: 'MESSAGES',
      url: '/menu/first'
    },
    {
      title: 'LOG OUT',
      url: '/menu/first'
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
