import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ThrowStmt } from '@angular/compiler';


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
value: Array<string> = ['', '', '', '', '']
  constructor() { }
  ngOnInit(): void {
  }
  click(s){
  this.value[0] = s;
  }
  click2(s) {
    this.value[1] = s;
  }
  click3(s) {
    this.value[2] = s;
  }
  click4(s) {
    this.value[3] = s;
  }
  click5(s) {
    this.value[4] = s;
  }
  temp = '';
  i = 'Serious';
  m='Care';
  g='Good';
  submit(){
    document.getElementById("modal").style.display = "block",
      document.getElementById("m").style.display = "none",
      document.getElementById("d").style.display = "none",
    console.log(this.value);
  this.value.forEach(element => {
      if(element==='N'){this.temp=this.i}
      else if(element==='Y'){this.temp=this.g}
      else(this.temp=this.m)
    });
  }
}
