import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";
import { Weather } from "./models";

@Injectable()
export class WeatherService{


    constructor(private httpClient: HttpClient){}


    getWeatherByCity(city: string, key:string): Promise<any>{
        const  params = new HttpParams()
      .set('q', city)
      .set('appid', key);

      return (lastValueFrom(this.httpClient.get<Weather>(
        'https://api.openweathermap.org/data/2.5/weather', 
        {params: params})))
  }
}