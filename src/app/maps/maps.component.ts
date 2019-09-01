import { Component, OnInit } from '@angular/core';

declare let L;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const blueMark = L.icon({
      iconUrl: '/assets/leaflet/images/marker-icon-2x.png',

      // iconSize: [38, 95], // size of the icon
      shadowSize: [50, 64], // size of the shadow
      iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    const map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([51.5, -0.09], { icon: blueMark }).addTo(map).bindPopup('Hello there.').openPopup();
    L.marker([51.495, -0.083], { icon: blueMark }).addTo(map).bindPopup('Hello there.').openPopup();
    L.marker([51.49, -0.1], { icon: blueMark }).addTo(map).bindPopup('Hello there.').openPopup();
  }

}
