import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../environments/environment';
import { WeatherData } from '../../model/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceComponent {
  constructor(private http:HttpClient) { }
  getWeatherData(cityName: string):Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.config.apiUrl, {
      params: new HttpParams()
      .set(environment.config.headerKey, environment.config.headerValue)
      .set('q', cityName)
      .set('days', 1)
      .set('aqi', 'no')
      .set('alerts', 'yes')
    })
  }
}
