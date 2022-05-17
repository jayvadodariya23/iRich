import { Blog } from "./blog";

export class getBlogsResponse{
    constructor(){
        this.status = false;
        this.message = "";
        this.data = new Array<Blog>(); 
    }
    status : boolean;
    message : string;
    data : Blog[];
}