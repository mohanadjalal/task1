import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counterValue : number  ; 
  title = 'task1';

  constructor(){
    this.counterValue=0 ; 
  }
}
