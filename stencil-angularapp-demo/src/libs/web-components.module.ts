import { NgModule } from '@angular/core';
import { defineCustomElements } from '@web-components/loader';

import {
  InputTest,
  MyComponent,
  SubmitButton,
} from './stencil-generated/proxies';

defineCustomElements(window);

@NgModule({
  imports: [],
  exports: [MyComponent, InputTest, SubmitButton],
  declarations: [MyComponent, InputTest, SubmitButton],
})
export class WebComponentsModule {}
