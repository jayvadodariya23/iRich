import { Place } from "./place";

export class getPlacesResponse{
    constructor(){
        this.status = false;
        this.message = "";
        this.data = new Array<Place>(); 
    }
    status : boolean;
    message : string;
    data : Place[];
}