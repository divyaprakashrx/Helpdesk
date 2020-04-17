import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
  infected:number=300;
  recovered:number=400;
  Dead:number=400;

  constructor() { }

  ngOnInit(): void {
  }

}
