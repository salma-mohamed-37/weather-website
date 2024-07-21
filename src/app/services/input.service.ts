import { Injectable, signal } from '@angular/core';
import { UserInput } from '../interfaces/UserInput';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InputService {
  currentData = signal<UserInput>({continent: "africa", country:"egypt", city:"cairo"});
  constructor() { }

  setData(newData:UserInput)
  {
    this.currentData.set(newData)
  }

  getData()
  {
      return this.currentData();
  }
}
