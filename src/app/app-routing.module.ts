// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherPageComponent } from './features/weather/pages/weather-page.component';

const routes: Routes = [
  { path: 'weather', component: WeatherPageComponent },
  { path: '', redirectTo: '/weather', pathMatch: 'full' },
  // Outras rotas podem ser adicionadas aqui
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}