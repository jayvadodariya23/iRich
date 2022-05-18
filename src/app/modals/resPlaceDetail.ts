import { Place } from "./place";

export class getPlaceDetail{
    constructor(){
        this.status = false;
        this.message = "";
        this.data = new Place(); 
    }
    status : boolean;
    message : string;
    data : Place;
}