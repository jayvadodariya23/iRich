import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/modals/place';
import { getPlacesResponse } from 'src/app/modals/places';
import { PlacesService } from 'src/app/services/places.service';


@Component({
  selector: 'app-heritage-gallery',
  templateUrl: './heritage-gallery.component.html',
  styleUrls: ['./heritage-gallery.component.css']
})
export class HeritageGalleryComponent implements OnInit {

  constructor(private placeServices : PlacesService) { }

  places :Place[] = new getPlacesResponse().data;

  ngOnInit(): void {

    this.placeServices.getPlaces().then(res => {
      this.places = res.data;
    }).catch(err => {
      this.places = new getPlacesResponse().data;
    });


  }

}
