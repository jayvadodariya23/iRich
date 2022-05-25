import { DocumentHome } from "./document";

export class getDocumentResponse{
    constructor(){
        this.status = false;
        this.message = "";
        this.data = new Array<DocumentHome>(); 
    }
    status : boolean;
    message : string;
    data : DocumentHome[];
}