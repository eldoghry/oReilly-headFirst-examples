import { WeatherData } from "../Subject/weatherData";
import IDisplayElement from "./IDisplayElement";
import IObserver from "./iObserver";

export default class CurrentConditionsDisplay
  implements IObserver, IDisplayElement
{
  temperature: number = 0;
  humidity: number = 0;

  constructor(weatherData: WeatherData) {
    weatherData.attach(this); // register me on subject observers list
  }

  update(weatherData: WeatherData) {
    this.humidity = weatherData.humidity;
    this.temperature = weatherData.temperature;
    this.display();
  }

  display(): void {
    console.log(
      `Current conditions: ${this.temperature}F degrees and ${this.humidity} humidity`
    );
  }
}
