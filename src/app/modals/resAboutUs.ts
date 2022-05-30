import { AboutUs } from "./aboutUs";

export class getAboutUsResponse{
    constructor(){
        this.status = false;
        this.message = "";
        this.data = new Array<AboutUs>(); 
    }
    status : boolean;
    message : string;
    data : AboutUs[];
} 