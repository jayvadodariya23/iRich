import { SiteSetting } from "./siteSetting";

export class ResSiteSetting{
    constructor(){
        this.status = false;
        this.message = " ";
        this.data = new SiteSetting();
    }
   status : boolean;
   message : string;
   data : SiteSetting;
}