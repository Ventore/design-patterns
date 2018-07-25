import { Subject, Observer } from './interfaces';

export default class WeatherData implements Subject {
  private observers: Observer[];
  private temp!: number;
  private humidity!: number;
  private pressure!: number;
  constructor() {
    this.observers = [];
  }
  public registerObserver(o: Observer) {
    this.observers.push(o);
  }
  public removeObserver(o: Observer) {
    const i = this.observers.indexOf(o);
    if (i >= 0) {
      this.observers.splice(i, 1);
    }
  }
  public notifyObserver() {
    this.observers.forEach(observer => observer.update(this.temp, this.humidity, this.pressure));
  }
  public measurmentChanged() {
    this.notifyObserver();
  }
  public setMeasurments(temp: number, humidity: number, pressure: number) {
    this.temp = temp;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurmentChanged();
  }
}
