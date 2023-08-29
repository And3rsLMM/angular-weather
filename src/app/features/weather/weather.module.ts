import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { WeatherComponent } from './components/weather.component';
import { WeatherPageComponent } from './pages/weather-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    WeatherComponent,
    WeatherPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    FlexLayoutModule
  ],
})
export class WeatherModule {}

