import { Injectable } from '@nestjs/common';

@Injectable()
export class NamesService {

    private _names: string[];

    constructor(){
        this._names = [];
    }

    createName(name: string){

        const nameFound = this._names.find(n => n.toLowerCase().trim() === name.toLowerCase().trim());

        if(!nameFound){
            this._names.push(name);
            return true;
        }else{
            return false;
        }
    }

    getNames(start?: string){
        if(!start){
            return this._names;
        }else{
            return this._names.filter(n => n.toLowerCase().trim().startsWith(start.toLowerCase().trim()));
        }
    }

    updateName(name: string, newName: string){
        const indexNameFound = this._names.findIndex(n => n.toLowerCase().trim() == name.toLowerCase().trim());
        const indexNewNameFound = this._names.findIndex(n => n.toLowerCase().trim() == newName.toLowerCase().trim());

        //-1 es decir que no lo encuentra
        if(indexNameFound != -1 && indexNewNameFound == -1){
            this._names[indexNameFound] = newName;
            return true;
        }else{
            return false;
        }
    }

}
