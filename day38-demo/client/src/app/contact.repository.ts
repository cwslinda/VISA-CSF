import { Injectable } from "@angular/core";
import Dexie, { DexieStacks } from "dexie";
import { Contact } from "./models";

@Injectable()
export class ContactRepository extends Dexie{

    contact!: Dexie.Table<Contact, string>
    
    constructor(){
        super('contactdb')
        // if change the variable name, it will not save because it remembers the PK as the previous one
        //if decide to change, this needs to be a diff number 
        this.version(1).stores({
            // contact table with email as the Primary Key
            contact: 'email'
        })

        this.contact =  this.table('contact')
    }
}