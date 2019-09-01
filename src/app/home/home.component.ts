import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
// leaflet

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  logs = [
    { time: '02:00pm',
      name: 'User',
      note: '--',
    },
    {
      time: '05:00pm',
      name: 'User',
      note: '--', 
    },
    {
      time: '07:00pm',
      name: 'User',
      note: '--',
    }
  ];
  constructor() { }

  ngOnInit() {
  }
}
