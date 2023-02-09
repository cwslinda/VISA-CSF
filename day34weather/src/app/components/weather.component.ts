import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Weather } from '../models';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  form!: FormGroup;
  city!: string;
  OPEN_WEATHER_API_KEY = "";
  
  model  = new Weather("Singapore", 0,0,0,"",0,0)
  
  
  constructor(private fb:FormBuilder, 
              private weatherSvc: WeatherService){

  }

  ngOnInit(): void {
    this.form = this.createForm();
  }

  searchWeather(){
    console.log("search weather");
    this.city = this.form.value["city"];
    console.log(this.city)
    this.weatherSvc.getWeather(this.city, this.OPEN_WEATHER_API_KEY)
      .then((result) => {
        console.log(result)
        this.model = new Weather(
          this.city, result.main.temp,
          result.main.pressure,
          result.main.humidity,
          result.weather[0].description,
          result.wind.speed,
          result.wind.deg
        )
        console.log("temp", result.weather[0].description)
      })

  }

  private createForm(): FormGroup{
    return this.fb.group({
      city: this.fb.control("", Validators.required)
    })
  }

}
