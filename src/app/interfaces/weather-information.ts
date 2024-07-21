export class WeatherInformation {
  description!:string;
  temprature!:number;
  icon!:string;
  info : Property[]=[];


  constructor(r:any)
  {
    this.description = r.weather[0].description
    this.temprature=r.main.temp
    this.icon= "http://openweathermap.org/img/wn/"+r.weather[0].icon+".png"
    this.info =[
      {
        name:"Wind",
        value:r.wind.speed,
        icon:"pi pi-angle-double-right",
        unit:"m/s"
      },
      {
        name:"Humidity",
        value:r.main.humidity,
        icon:"pi pi-chart-line",
        unit:"%"
      },
      {
        name:"Pressure",
        value:r.main.pressure,
        icon:"pi pi-gauge",
        unit:"mbar"
      },
      {
        name:"Visibility",
        value:r.visibility,
        icon:"pi pi-eye",
        unit:"m"
      },
    ]
  }

}



export class Property{
  name!:string;
  value!:number;
  icon!:string;
  unit!:string;

}
