// features.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherModule } from './weather/weather.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    WeatherModule, 
  ],
  exports:[
    WeatherModule
  ]
})
export class FeaturesModule {}

