import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { PlacesService } from 'src/app/services/places.service';
import { Place } from 'src/app/modals/place';
import { getPlaceDetail } from 'src/app/modals/resPlaceDetail';
import { NotificationService } from 'src/app/services/notification.service';

declare var $ : any;

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.css']
})
export class PlaceDetailComponent implements OnInit {

  place_id: string = "";
  place : Place = new getPlaceDetail().data;

  constructor(private route: ActivatedRoute, private palceServices : PlacesService, 
    private notificationService : NotificationService) {

    }

  ngOnInit(): void {

    this.place_id = this.route.snapshot.paramMap.get('id') || "";

    if(this.place_id){

      this.palceServices.getPlaceDetail(this.place_id).then(res => {
        if(res.status)
        {
          this.place  = res.data;
          this.InitializeGallery();
        }
        else
        {
          this.place  = new getPlaceDetail().data;
          this.notificationService.showError('No Place Found','Failed');
        }
      }).catch(err => {
        this.place  = new getPlaceDetail().data;
        this.notificationService.showError('Something Went Wrong','Failed');
      });

    }
    else{
      this.notificationService.showError('Something Went Wrong','Failed');
    }
    
  }

  InitializeGallery = () => {

    setTimeout(() => {
      $('#placegallery').owlCarousel({
        loop: false,
        margin: 20,
        dots: false,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        items: 2,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 2
            }
        }

      });

      $('#irch-v-carousel').owlCarousel({
        loop: false,
        margin: 0,
        dots: false,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        items: 2,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }

      })
    }, 3000);

    
  }

}
