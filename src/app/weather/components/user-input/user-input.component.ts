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
    continent: new FormControl("",Validators.required),
    country: new FormControl("",Validators.required),
    city : new FormControl("",Validators.required)

  })

  constructor(public countriesService : CountriesService, public inputService: InputService, public messageService : MessageService){}

  onChooseContinent(event :Event)
  {
    const selectElement = event.target as HTMLSelectElement;
    var c = selectElement.value;
    if (c == "")
    {
      console.log("required")
    }
    else
    {

      this.countriesService.getCountriesbycontinent(c).subscribe({
        next: (countries)=>
        {
          this.countries=countries
        },
        error :(err :Error)=> console.log(err)
      });
    }
  }



  submit()
  {
    if (this.input.valid)
    {
      var i: UserInput={
        continent:this.input.value.continent!.charAt(0).toUpperCase() + this.input.value.continent!.slice(1),
        country:this.input.value.country!.charAt(0).toUpperCase() + this.input.value.country!.slice(1),
        city:this.input.value.city!.charAt(0).toUpperCase() + this.input.value.city!.slice(1)
      }
      if(this.isValidRegion(i))
      {
        this.inputService.setData(i)
      }
      else
      {
        this.showToast("Invalid time zone:" + i.continent+"/"+i.city)
      }


    }
    else
    {
      this.showToast("All fields are required")
    }
  }


  isValidRegion(i:UserInput)
  {
    const timeZones = moment.tz.names()

    if (timeZones.includes(i.continent+"/"+i.city))
    {
      return true
    }
    else
    {
      return false
    }
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
