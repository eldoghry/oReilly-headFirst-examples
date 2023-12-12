import { WeatherData } from "../Subject/weatherData";
import IDisplayElement from "./IDisplayElement";
import IObserver from "./iObserver";

export default class HeatIndexDisplay implements IObserver, IDisplayElement {
  heatIndex: number = 0;

  constructor(weatherData: WeatherData) {
    weatherData.attach(this); // register me on subject observers list
  }

  update(weatherData: WeatherData) {
    const T = weatherData.temperature;
    const T2 = weatherData.pressure;
    const RH = weatherData.humidity;

    this.heatIndex =
      16.923 +
      1.85212 * 10 -
      1 * T +
      5.37941 * RH -
      1.00254 * 10 -
      1 * T * RH +
      9.41695 * 10 -
      3 * T2 +
      7.28898 * 10 -
      3 * RH * 2 +
      3.45372 * 10 -
      4 * T2 * RH -
      8.14971 * 10 -
      4 * T * RH * 2 +
      1.02102 * 10 -
      5 * T2 * RH * 2 -
      3.8646 * 10 -
      5 * T * 3 +
      2.91583 * 10 -
      5 * RH * 3 +
      1.42721 * 10 -
      6 * T * 3 * RH +
      1.97483 * 10 -
      7 * T * RH * 3 -
      2.18429 * 10 -
      8 * T * 3 * RH * 2 +
      8.43296 * 10 -
      10 * T2 * RH * 3 -
      4.81975 * 10 -
      11 * T * 3 * RH * 3;

    this.display();
  }

  display(): void {
    console.log(`HeatIndex : ${this.heatIndex.toFixed(2)}`);
  }
}
