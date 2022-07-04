import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'stencil-angularapp-demo';
  input = new FormControl('abc');

  ngOnInit(): void {
    this.input.valueChanges.subscribe((v) => console.log(v));
  }

  log = console.log;
}
