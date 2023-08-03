import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template:`<h1>Hola Mundo</h1>
   <p> Counter: {{counter}}</p>
  <button (click)="increaseBy(1)" >+1</button>
  <button (click)="reset()">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>
  `,
})

export class CounterComponent{
  public counter: number = 0;
  increaseBy (value: number):void{
    this.counter+=value;
  }

reset (){
  this.counter=0;
}
}
