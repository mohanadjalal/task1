import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  localValue: number = 0;
  @Input() minValue: number = 2;
  @Input() maxValue: number = 7;

  @Output() counterValue: EventEmitter<number>;

  colorRange: string = 'green';

  constructor() {
    this.counterValue = new EventEmitter();
  }

  ngOnInit(): void {
    if (this.localValue < this.minValue) this.colorRange = 'yellow';
    else if (this.localValue > this.maxValue) this.colorRange = 'red';
    else this.colorRange = 'green';
  }

  updateC(op: string) {
    if (op === '+') this.localValue += 1;
    else this.localValue -= 1;
    this.counterValue.emit(this.localValue);

    if (this.localValue < this.minValue) this.colorRange = 'yellow';
    else if (this.localValue > this.maxValue) this.colorRange = 'red';
    else this.colorRange = 'green';
  }
  
}
