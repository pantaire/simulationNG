import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

WeatherData:any;
    constructor() { }

    ngOnInit(): void {
        this.getWeatherData();
        console.log(this.WeatherData);
    }

    getWeatherData() {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=mosbach&appid=ff1bc4683fc7325e9c57e586c20cc03e')
        .then(response=>response.json())
        .then(weather=>{this.setWeatherData(weather);})
    }

    setWeatherData(weather){
        this.WeatherData = weather;
        this.WeatherData.temp_celsius = (this.WeatherData.main.temp - 273.15).toFixed(0);
        this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
        this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    }

}
