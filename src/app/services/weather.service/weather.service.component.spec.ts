import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherServiceComponent } from './weather.service.component';

describe('WeatherServiceComponent', () => {
  let component: WeatherServiceComponent;
  let fixture: ComponentFixture<WeatherServiceComponent>;
  let service: WeatherServiceComponent

  beforeEach(async () => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherServiceComponent);

    
    fixture = TestBed.createComponent(WeatherServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});