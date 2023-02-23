import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";

@Injectable({
    providedIn: 'root'
  })

  export class PostService{

    constructor(private http: HttpClient){ }


    postToFeed(formData: FormData): Promise<any>{ 
        console.log("in service - postToFeed")

        return firstValueFrom(
            this.http.post<any>('/api/post', formData)
        )
    }
  }