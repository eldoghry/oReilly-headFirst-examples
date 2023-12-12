import { WeatherData } from "../Subject/weatherData";
import IDisplayElement from "./IDisplayElement";
import IObserver from "./iObserver";

export default class StatisticsDisplay implements IObserver, IDisplayElement {
  weatherData: WeatherData;
  statistics: number = 0;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;
    weatherData.attach(this); // register me on subject observers list
  }

  update(weatherData: WeatherData) {
    this.statistics =
      this.weatherData.pressure +
      this.weatherData.temperature +
      this.weatherData.humidity;
    this.display();
  }

  display(): void {
    console.log(
      `Statistics: ${this.statistics}, (${this.weatherData.temperature}/${this.weatherData.humidity}/${this.weatherData.pressure})`
    );
  }
}
