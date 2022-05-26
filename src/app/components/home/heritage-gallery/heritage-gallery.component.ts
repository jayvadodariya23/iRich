import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/modals/place';
import { getPlacesResponse } from 'src/app/modals/places';
import { PlacesService } from 'src/app/services/places.service';
declare var $ : any;


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
      this.InitializeGallery();
    }).catch(err => {
      this.places = new getPlacesResponse().data;
    });
  }

  InitializeGallery = () => {

    setTimeout(() => {
      $('.gallery-carousel').owlCarousel({
        loop: false,
        margin: 20,
        dots: false,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        items: 5,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
  
      });
    }, 3000);

    
  }

}
