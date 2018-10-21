import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero1',
  templateUrl: './hero1.component.html',
  styleUrls: ['./hero1.component.css']
})
export class Hero1Component implements OnInit {
static like_count:number;
name ="Hello User ";
attempt :number ;
  constructor() { }

  ngOnInit() {
this.like_count=0;
this.attempt=1;
  }
  onClick(){
    if(this.attempt==1){
    this.name="Thanks for Liking me !!";
    this.like_count++;
    this.attempt--;
  }
  else{
    this.name="Thats it for today Thanks !!!"
  }

  }
}
