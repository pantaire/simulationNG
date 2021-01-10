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
        // let weather = JSON.parse('{"coord":{"lon":72.8479,"lat":19.0144},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50n"}],"base":"stations","main":{"temp":301.67,"feels_like":303.48,"temp_min":301.15,"temp_max":302.15,"pressure":1009,"humidity":65},"visibility":2100,"wind":{"speed":3.6,"deg":330},"clouds":{"all":0},"dt":1610287311,"sys":{"type":1,"id":9052,"country":"IN","sunrise":1610243040,"sunset":1610282865},"timezone":19800,"id":1275339,"name":"Mumbai","cod":200}')
    }

    setWeatherData(weather){
        this.WeatherData = weather;
        this.WeatherData.temp_celsius = (this.WeatherData.main.temp - 273.15).toFixed(0);
        this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
        this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    }

}
