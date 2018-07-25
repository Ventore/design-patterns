"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CurrentConditionsDisplay {
    constructor(weatherData) {
        this.weatherData = weatherData;
        this.weatherData.registerObserver(this);
    }
    update(temp, humidity, pressure) {
        this.temp = temp;
        this.humidity = humidity;
        this.display();
    }
    display() {
        console.log(`Current conditions: ${this.temp}°C and ${this.humidity}% humidity`);
    }
}
exports.default = CurrentConditionsDisplay;
