import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';

@Component({
  tag: 'input-test',
  styleUrl: 'input-test.css',
  shadow: true,
})
export class InputTest {
  @Prop({ reflect: true, mutable: true }) value: string;
  @Event() input: EventEmitter<string>;
  private onInputChangeValue(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
    this.input.emit(this.value);
    console.log('event triggerdd');
  }

  render() {
    return <input type="text" placeholder="Enter some text" value={this.value} onInput={this.onInputChangeValue.bind(this)}></input>;
  }
}
