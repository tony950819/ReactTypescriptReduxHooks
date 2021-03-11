import {Author} from './Models/Models'
export function SetName(id:number,authors:Array<Author>){
    let name:string="";
    let author:Author=authors.find(dato=>dato.id===id) || new Author();
    if(author["id"]){
        name=author.name;
    }
    return name;

}
