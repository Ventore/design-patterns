export default abstract class Beverage {
  description: string;
  constructor() {
    this.description = 'Unknown Bevarage';
  }
  public getDescription(): string {
    return this.description;
  }
  public abstract cost(): number;
}
