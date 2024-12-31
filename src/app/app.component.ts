import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { WeatherData } from './model/weather.model';
import { FormsModule } from '@angular/forms';
import { CommonModule} from '@angular/common'
import { WeatherServiceComponent } from './services/weather.service/weather.service.component';

@Component({   
    selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  constructor(private weatherService: WeatherServiceComponent) {}
  title = 'weatherApp';
  weatherData?: any;
  cityName:string='Ambala';


  ngOnInit(): void {
    this.getWeatherdata(this.cityName);
    this.cityName='';
  }

  onSubmit(){
    this.getWeatherdata(this.cityName);
    this.cityName='';
  }

  private getWeatherdata(cityName:string){
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next: (response)=> {
        this.weatherData = response;
        console.log(response);
      }
    })
  }
}
