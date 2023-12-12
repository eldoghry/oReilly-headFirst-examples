// subject
import Subject from "./subject-abstract.class.ts";

export class WeatherData extends Subject {
  temperature: number = 0;
  humidity: number = 0;
  pressure: number = 0;

  constructor(temperature: number, humidity: number, pressure: number) {
    super();
    this.setMeasurements(temperature, humidity, pressure);
  }

  measurementsChanged() {
    this.notify();
  }

  setMeasurements(temperature: number, humidity: number, pressure: number) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }
}
