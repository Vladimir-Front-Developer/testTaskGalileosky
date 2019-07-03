import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss']
})
export class ChallengeComponent {
  letterList: Array<string> = [ 'Аа', 'Бб', 'Вв', 'Гг', 'Дд', 'Ее' ]
}
