import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {
  currentTime: string;
  selectedDate = new Date();
  private interval: any;

  ngOnInit() {
    this.updateCurrentTime();
    this.interval = setInterval(() => this.updateCurrentTime(), 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  updateCurrentTime() {
    this.currentTime = new Date().toLocaleString('en-LV', {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false
    });
  }
}