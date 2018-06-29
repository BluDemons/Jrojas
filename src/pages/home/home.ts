import { Component, ViewChild, NgModule, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {} from '@types/googlemaps';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
    this.startGoogleMap();
  }

  startGoogleMap() {
    const ioc = new
         google.maps.LatLng(-0.108744, -78.294483);
        const mapProp = {
        center:ioc,
      zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP};
        const map = new google.maps.Map(this.gmapElement.nativeElement,mapProp)
        var marcador = new
        google.maps.Marker({
          position:ioc,
          map:map,
          title: "Esta es Mi Casa"
        })
  }
}
