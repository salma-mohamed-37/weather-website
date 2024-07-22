import { Component, EventEmitter, Input, Output} from '@angular/core';
import { CountriesService } from '../../../services/countries.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserInput } from '../../../interfaces/UserInput';
import { InputService } from '../../../services/input.service';
import { MessageService } from 'primeng/api';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss'
})
export class UserInputComponent {

  isVisible: boolean=true;
  countries :string[] =[];

    input = new FormGroup ({
    country: new FormControl("",Validators.required),
    city : new FormControl("",Validators.required)

  })

  constructor(public countriesService : CountriesService, public inputService: InputService, public messageService : MessageService){}

  ngOnInit()
  {
    this.countriesService.getCountries().subscribe({
      next: (countries)=>
      {
        this.countries=countries
      },
      error :(err :Error)=> console.log(err)
    });
  }

  submit()
  {
    var currentTimeZone = this.getRegion()
    console.log(currentTimeZone)
    if (currentTimeZone === undefined)
    {
      this.showToast("No valid time zone")
    }
    else
    {
      if (this.input.valid)
        {
          var i: UserInput={
            country:this.input.value.country!.charAt(0).toUpperCase() + this.input.value.country!.slice(1),
            city:this.input.value.city!.charAt(0).toUpperCase() + this.input.value.city!.slice(1),
            timeZone :currentTimeZone
          }

          this.inputService.setData(i)
        }
        else
        {
          this.showToast("All fields are required")
        }
    }
  }


  getRegion()
  {
    const timeZones = moment.tz.names()

    return timeZones.filter(z => z.toLowerCase().includes(this.input.value.city!.replace(" ","_").toLowerCase()))[0]
  }
  display()
  {
    this.isVisible=true
  }

  hide()
  {
    this.isVisible=false
  }
  showToast(message:string)
  {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: message});
  }

}
