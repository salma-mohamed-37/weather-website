import { Component, Input } from '@angular/core';
import { Property } from '../../../interfaces/weather-information';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() property:Property | undefined;
}
