import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChallengeComponent } from './challenge.component';
import { LetterComponent } from './letter/letter.component';

const routes: Routes = [
  { path: 'challenge', component: ChallengeComponent, children: [
    { path: ':id', component: LetterComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChallengeRoutingModule { }
