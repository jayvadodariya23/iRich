import { PrivacyPolicy } from "./privacyPolicy";

export class getPrivacyPolicyResponse{
    constructor(){
        this.status = false;
        this.message = "";
        this.data = new Array<PrivacyPolicy>(); 
    }
    status : boolean;
    message : string;
    data : PrivacyPolicy[];
}