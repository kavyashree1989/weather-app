export class Weather {
  city: string = '';
  country: string = '';
  temprature: number = 0;
  type: string = '';
  description: string = '';
  minTemprature: number = 0;
  maxTemprature: number = 0;
  precipitation: number = 0;
  humidity: number = 0;
  wind: number = 0;
  visibility: number = 0;
  isUpdate: boolean = false;
  order: number = 0;
  icon: string = '';

  public getTemprature(format: string, mode?: string): number {
    let temp = this.temprature;

    if (mode) {
      temp = mode === 'min' ? this.minTemprature : this.maxTemprature;
    }

    const tempInDegreeCelsius = Math.floor(temp - 273.15);
    const tempInFarhrenheit = Math.floor(tempInDegreeCelsius * (9 / 5) + 32);

    return format === 'C' ? tempInDegreeCelsius : tempInFarhrenheit;
  }
}
