import { Component } from '@angular/core';

@Component({
  selector: 'app-rewards',
  templateUrl: 'rewards.component.html'
})
export class RewardsComponent {
    reward:number = 5;
    max:number = 12
  constructor() {
    console.log('Hello RewardsComponent Component');
  }

}
