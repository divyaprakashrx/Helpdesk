import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {
question=[
  '1.Are you feeling unwell with symptoms such as fever,sore throat,cough or shortness of breath',
  '2.Have you had close contact with someone who has a confirmed case of coronavirus(COVID-19)?',
  '3.Have you travelled overseas in the last 14 days?',
  '4.Do you belong to areas that are declared hotspot by Government of India?',
  '5.Do you feel weekness or any allergies?'
]
  constructor() { }

  ngOnInit(): void {
  }

}
