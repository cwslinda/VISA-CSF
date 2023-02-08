import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from "rxjs";
import { Game, Comment } from "../models/models";



@Injectable()
export class BggService{

    constructor(private http: HttpClient){ }

    getGames(): Promise<Game[]> {
        return lastValueFrom(
            this.http.get<Game[]>('/api/games')
        )
    }

    getCommentsById(gameId: string): Promise<Comment[]>{
        return lastValueFrom(
            this.http.get<Comment[]>(`/api/game/${gameId}/comments`)
        )
    }
  

}