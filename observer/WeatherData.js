"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WeatherData {
    constructor() {
        this.observers = [];
    }
    registerObserver(o) {
        this.observers.push(o);
    }
    removeObserver(o) {
        const i = this.observers.indexOf(o);
        if (i >= 0) {
            this.observers.splice(i, 1);
        }
    }
    notifyObserver() {
        this.observers.forEach(observer => observer.update(this.temp, this.humidity, this.pressure));
    }
    measurmentChanged() {
        this.notifyObserver();
    }
    setMeasurments(temp, humidity, pressure) {
        this.temp = temp;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurmentChanged();
    }
}
exports.default = WeatherData;
