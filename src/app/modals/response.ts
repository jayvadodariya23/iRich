export class Response{
    constructor(){
        this.status = false;
        this.message = " ";
        this.data = new Array();
    }
   status : boolean;
   message : string;
   data : any;
}