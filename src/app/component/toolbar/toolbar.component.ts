import { Component, OnInit } from '@angular/core';

import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(public appComponent: AppComponent, private router: Router) { }
  
  ngOnInit(): void { }
  
  removeStatusLogin(): void {
    localStorage.removeItem('Status-Login');
    this.appComponent.menuBar = false;
  }

}
