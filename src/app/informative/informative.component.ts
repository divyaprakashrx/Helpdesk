import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informative',
  templateUrl: './informative.component.html',
  styleUrls: ['./informative.component.css']
})
export class InformativeComponent implements OnInit {
  value='overview';
  constructor() { }

  ngOnInit(): void {
  }

  name(string){
    this.value=string;
  }
  
}
