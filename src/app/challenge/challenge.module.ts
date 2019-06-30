import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChallengeRoutingModule } from './challenge-routing.module';
import { ChallengeComponent } from './challenge.component';
import { LetterComponent } from './letter/letter.component';

@NgModule({
  declarations: [ChallengeComponent, LetterComponent],
  imports: [
    CommonModule,
    ChallengeRoutingModule,
  ]
})
export class ChallengeModule { }
