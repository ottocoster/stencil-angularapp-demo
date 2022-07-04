import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'input-test',
  styleUrl: 'input-test.css',
  shadow: true,
})
export class InputTest {
  @Prop({ reflect: true, mutable: true }) value: string;
  private onInputChangeValue(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
  }

  render() {
    return <input type="text" placeholder="Enter some text" value={this.value} onInput={this.onInputChangeValue.bind(this)}></input>;
  }
}
