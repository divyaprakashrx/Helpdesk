import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { IndexComponent } from './index/index.component';
import { ResultComponent } from './result/result.component';
import { TweetComponent } from './tweet/tweet.component';
import { InformativeComponent } from './informative/informative.component';

const routes: Routes = [
  { path:'accessment', component:AssessmentComponent },
  {path:'',component:HomeComponent},
  {path:'index',component:IndexComponent },
  {path:'result',component:ResultComponent},
  {path:'tweet',component:TweetComponent},
  {path:'inform',component:InformativeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
