import { Component, OnInit } from '@angular/core';
import { setInterval } from 'timers';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  progress = 0;
  constructor() { }

  ngOnInit() {
    setInterval(()=>{
      this.progress = this.progress +5;
    }, 1000)
  }

}
