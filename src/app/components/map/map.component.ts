import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/modals/place';
import { getPlacesResponse } from 'src/app/modals/places';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private placeServices : PlacesService) { }

  places :Place[] = new getPlacesResponse().data;

  zoom : number = 14;

  lat: number = 0;
  lng: number = 0;

  markers: marker[] = [];

  clickedMarker() {

  }


  ngOnInit(): void {

    this.placeServices.getPlaces().then(res => {
      this.places = res.data;
      let mkr : marker;
      res.data.map((place)=> {
        mkr = new marker;
        mkr.place_id = place.place_id;
        mkr.lat = parseFloat(place.latitude);
        mkr.lng = parseFloat(place.longitude);
        mkr.draggable = false;
        mkr.label = place.place_title;
        mkr.place_description = place.place_description;
        mkr.icon = place.icon;
        this.markers.push(mkr);
      });
      this.lat = this.markers[0].lat;
      this.lng = this.markers[0].lng;
    }).catch(err => {
      this.places = new getPlacesResponse().data;
    });

  }


}

// just an interface for type safety.
class marker {
  constructor(){
    this.place_description = "";
    this.place_id = 0;
    this.lat = 0;
    this.lng = 0;
    this.label = "";
    this.draggable = false;
    this.icon = "";
  }
  place_description : string;
  place_id : number
	lat: number;
	lng: number;
	label: string;
	draggable: boolean;
  icon : string;
}

