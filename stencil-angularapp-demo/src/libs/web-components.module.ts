import { NgModule } from '@angular/core';
import { defineCustomElements } from '@web-components/loader';

import { InputTest, MyComponent } from './stencil-generated/proxies';

defineCustomElements(window);

@NgModule({
  imports: [],
  exports: [MyComponent, InputTest],
  declarations: [MyComponent, InputTest],
})
export class WebComponentsModule {}
