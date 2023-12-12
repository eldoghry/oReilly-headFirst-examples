import CurrentConditionsDisplay from "./Observers/CurrentConditionsDisplay.ts";
import HeatIndexDisplay from "./Observers/HeatIndexDisplay.ts";
import StatisticsDisplay from "./Observers/StatisticsDisplay.ts";
import { WeatherData } from "./Subject/weatherData.ts";

// subject
const weatherData = new WeatherData(80, 65, 30.4);

// observers
new CurrentConditionsDisplay(weatherData);
new StatisticsDisplay(weatherData);

weatherData.setMeasurements(82, 70, 29.2);

// add new observer on runtime
new HeatIndexDisplay(weatherData);
weatherData.setMeasurements(82, 70, 29.2);
weatherData.setMeasurements(80, 65, 30.4);
