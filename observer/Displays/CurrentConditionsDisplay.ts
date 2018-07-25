import { Observer, DisplayElement, Subject } from '../interfaces';

export default class CurrentConditionsDisplay implements Observer, DisplayElement {
  private temp!: number;
  private humidity!: number;
  private weatherData: Subject;
  constructor(weatherData: Subject) {
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
  }
  public update(temp: number, humidity: number, pressure: number) {
    this.temp = temp;
    this.humidity = humidity;
    this.display();
  }
  public display() {
    console.log(`Current conditions: ${this.temp}°C and ${this.humidity}% humidity`);
  }
}
