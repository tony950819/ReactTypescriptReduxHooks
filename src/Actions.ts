import {Authour} from './Models/Models'
export function SetName(id:number,authours:Array<Authour>){
    let name:string="";
    let author:Authour=authours.find(dato=>dato.id===id) || new Authour();
    if(author["id"]){
        name=author.name;
    }
    return name;

}
