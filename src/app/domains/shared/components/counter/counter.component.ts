import { Component, Input, signal, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

    @Input({required: true}) duration = 0;
    @Input({required: true}) message = "";
    counter = signal(0);

    constructor(){
      //Just runs once
      //No ASYNG, no promesas ni suscribe, no tiempo ni demora
      //Before render
      console.log("constructor");
      console.log("-".repeat(10));
    }

    ngOnChanges(changes: SimpleChanges) {
      // before and during render
      console.log("ngOnChanges");
      console.log("-".repeat(10));
      console.log(changes);
      const duration = changes['duration'];
      const message = changes['message'];
      if(duration && duration.currentValue !== duration.previousValue) {
        this.doSomething();
      }
   
    }

    ngOnInit() {
      // after render
      // Just run once // ASYNC
      window.setInterval(() => {
        this.counter.update(statePrev => statePrev+1)
      }, 1000)
      console.log("ngOnInit");
      console.log("-".repeat(10)); 
      console.log("duration =>",  this.duration);
      console.log("message =>",  this.message);
    }

    ngAfterViewInit() {
      //after render
      //have Sons  been rendered?
      console.log("ngAfterViewInit");
      console.log("-".repeat(10)); 
    }

    ngOndestroy(){
      console.log("ngOndestroy");
      console.log("-".repeat(10)); 
    }

    doSomething(){
      console.log('Change duration');
      //Async
    }

}
