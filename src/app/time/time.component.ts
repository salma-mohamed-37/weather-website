import { Component, effect, signal } from '@angular/core';
import * as moment from 'moment-timezone';
import { InputService } from '../services/input.service';
import { UserInput } from '../interfaces/UserInput';

@Component({
  selector: 'app-time',
  standalone: true,
  imports: [],
  templateUrl: './time.component.html',
  styleUrl: './time.component.scss'
})
export class TimeComponent {
  date:string = "";
  time:string="";
  day:string="";

  data: UserInput| undefined = undefined ;

  isDataExists(): boolean
  {
    return this.data !== undefined && Object.keys(this.data).length > 0;
  }


  constructor(public inputService:InputService)
  {
    effect(() => {
     this.data = this.inputService.getData()

     if (this.isDataExists())
      {
        this.updateTime()
        setInterval(() => this.updateTime(), 1000);
      }

    });
  }

  updateTime()
  {
    var now = moment.tz(this.data!.timeZone!)
    this.date = now.format("DD MMMM YYYY")
    this.time = now.format("h:mm:ss a")
    this.day=now.format("ddd")
  }

}
