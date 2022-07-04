import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'stencil-angularapp-demo';
  input = new FormControl('');
  initialValue = 'abc';

  ngOnInit(): void {
    this.input.setValue('hallo');
    this.input.valueChanges.subscribe((v) => console.log(v));
  }

  handleChange(event: Event) {
    this.input.setValue((event.target as HTMLInputElement).value);
  }
}
