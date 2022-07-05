import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'stencil-angularapp-demo';
  formGroup = new FormGroup({
    input: new FormControl('abc'),
  });
  log = console.log;

  ngOnInit(): void {
    this.formGroup.controls.input.valueChanges.subscribe((v) => console.log(v));
  }

  onSubmit() {
    console.log(this.formGroup.value);
  }
}
