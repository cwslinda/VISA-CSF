import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";
import { Item, PostingResult } from "../models/models";


@Injectable({
    providedIn: 'root'
  })
export class ItemService{


    constructor(private http: HttpClient){}

    postItems(item: Item, imageFile: File): Promise<PostingResult>{

        console.log("here")
        const fd: FormData = new FormData();

        fd.set("name", item.name)
        fd.set("email", item.email)
        fd.set("phone", item.phone)
        fd.set("title", item.title)
        fd.set("description", item.description)
        fd.set("image", imageFile)

        return lastValueFrom(
            this.http.post<PostingResult>(`https://adjoining-suit-production.up.railway.app/api/posting`, fd)
        )
    }

    confirmItem(postingId: string, json: PostingResult): Promise<any>{
        return lastValueFrom(this.http.put(`https://adjoining-suit-production.up.railway.app/api/posting/${postingId}`, json))
    }
    
}