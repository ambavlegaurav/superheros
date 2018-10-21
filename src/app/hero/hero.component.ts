import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
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
