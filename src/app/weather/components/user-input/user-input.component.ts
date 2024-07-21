import { Component, EventEmitter, Input, Output} from '@angular/core';
import { CountriesService } from '../../../services/countries.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserInput } from '../../../interfaces/UserInput';
import { InputService } from '../../../services/input.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss'
})
export class UserInputComponent {

  isVisible: boolean=false;
  countries :string[] =[];

    input = new FormGroup ({
    continent: new FormControl("",Validators.required),
    country: new FormControl("",Validators.required),
    city : new FormControl("",Validators.required)

  })

  constructor(public countriesService : CountriesService, public inputService: InputService){}

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
        continent:this.input.value.continent!,
        country:this.input.value.country!,
        city:this.input.value.city!
      }

      this.inputService.setData(i)
      this.isVisible = false;
    }
    else
    {
      console.log("not valid")
    }
  }

  display()
  {
    this.isVisible=true
  }
}
