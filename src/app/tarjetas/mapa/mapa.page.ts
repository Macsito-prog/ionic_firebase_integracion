import { Component, OnInit } from '@angular/core';
import { coordInfo } from 'src/app/models/coord-info.model';
import { marker } from 'src/app/models/marker.model';

declare var google;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  map = null;
  marker: marker = {

    position:{
      lat:-33.5160402,
      lng:-70.5986935,
    },
    title:"Sambil"
  };
  coordInfo: coordInfo = null;

  constructor() { }

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    // create LatLng object
    const myLatLng = {lat: this.marker.position.lat, lng: this.marker.position.lng};
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 15
    });
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      this.addmarker(this.marker);
      
      mapEle.classList.add('show-map');
    });
  }

  addmarker(marker: marker){
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });

  }

}
