import { Blog } from "./blog";

export class getBlogDetail{
    constructor(){
        this.status = false;
        this.message = "";
        this.data = new Blog(); 
    }
    status : boolean;
    message : string;
    data : Blog;
}