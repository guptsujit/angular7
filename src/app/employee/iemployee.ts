import {ISkill} from "./iskill";
export interface IEmployee {
    id :number;
    firstname : string;
    lastname : string;
    contactpreference : string;
    email : string;
    phone : number;
    skills:ISkill[]
}

