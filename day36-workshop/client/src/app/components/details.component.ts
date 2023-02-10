import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { City, Weather } from '../models';
import { WeatherService } from '../weather.service';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{

  params$!: Subscription
  city!: City
  OPEN_WEATHER_API_KEY =  ""
  model  = new Weather("Singapore", 0,0,0,"",0,0)


  constructor(private activatedRoute: ActivatedRoute, private weatherSvc: WeatherService) { }
  
  
  ngOnInit(): void {
    this.params$ = this.activatedRoute.params.subscribe(
      (params) => {
        const city = params['city']
        console.log(city)
        this.weatherSvc.getWeatherByCity(city, this.OPEN_WEATHER_API_KEY)
          .then((result) => {
          console.log(result)
          this.model = new Weather(
          result.name, result.main.temp,
          result.main.pressure,
          result.main.humidity,
          result.weather[0].description,
          result.wind.speed,
          result.wind.deg
        )
        console.log("name >>> ",  result.name)
      })
      }
    )
  }
  
}
