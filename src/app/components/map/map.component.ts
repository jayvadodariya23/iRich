import { Component, OnInit } from '@angular/core';

export interface PlacesDetails  {
  id : number
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  places :PlacesDetails[] = [{ id : 1},{ id : 2},{ id : 3},{ id : 4},{ id : 5}]
}
