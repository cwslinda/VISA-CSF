import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from '../models';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit{
  

  cityForm!: FormGroup
  city!: City
  cities: City[] = []


  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    const jsonString = localStorage.getItem("cities")
    if(!!jsonString){
      this.cities = JSON.parse(jsonString)
    }
    this.cityForm = this.createForm()
  }

  add(){
    this.city = this.cityForm.value['name'] as City
    console.log("city >>>> ", this.city)

    if(!this.cities.includes(this.city)){
      this.cities = [...this.cities, this.city]
      console.log("cities >>> ", this.cities)
    }
  
    
      const jsonString = JSON.stringify(this.cities)
      console.log(`to be saved > ${jsonString}`)
      localStorage.setItem('cities', jsonString)
      this.cityForm = this.createForm()
  }

  clear(){
    localStorage.removeItem('cities')
    window.location.reload()

  }

  private createForm(): FormGroup {
    return this.fb.group({
      name: this.fb.control('')
  })


  }



}
