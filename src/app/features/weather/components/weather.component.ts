import { MatIconModule } from '@angular/material/icon';
import { Component } from '@angular/core';
import { WeatherService } from 'src/app/core/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent {
  city = '';
  weatherData: any;
  specificWeatherData: any;

  constructor(private weatherService: WeatherService) {}

  searchWeather() {
    this.weatherService.getWeather(this.city).subscribe(data => {
      this.weatherData = data;
      this.specificWeatherData = this.weatherData.weather[0];
    });
  }

  getWeatherCardClass() {
    if (this.weatherData && this.weatherData.main.temp > 22) {
      return 'warm-weather-card';
    } else if (this.weatherData && this.weatherData.main.temp <= 22) {
      return 'cool-weather-card';
    }
    return '';
  }
}

