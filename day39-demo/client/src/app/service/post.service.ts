import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { Post } from "../model/model";

@Injectable()
export class PostService{
    imageData = ""
    constructor(private http: HttpClient){ }

    upload(form: any): Promise<Post>{
        const formData = new FormData();
        formData.set("title", form['title'])
        formData.set("text", form['text'])
        formData.set("myImage", form['imageUrl'])
            return firstValueFrom(
                this.http.post<Post>('/upload', formData)
    )}
}