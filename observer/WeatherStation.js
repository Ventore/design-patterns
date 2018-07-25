"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WeatherData_1 = __importDefault(require("./WeatherData"));
const CurrentConditionsDisplay_1 = __importDefault(require("./Displays/CurrentConditionsDisplay"));
const weatherData = new WeatherData_1.default();
const currentConditionsDisplay = new CurrentConditionsDisplay_1.default(weatherData);
setInterval(() => {
    weatherData.setMeasurments(Math.random() * 100, Math.random() * 100, Math.random() * 1000);
}, 1000);
