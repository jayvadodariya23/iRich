import { TermsAndCondition } from "./termsAndCondition";

export class getTermsAndConditionResponse{
    constructor(){
        this.status = false;
        this.message = "";
        this.data = new Array<TermsAndCondition>(); 
    }
    status : boolean;
    message : string;
    data : TermsAndCondition[];
}