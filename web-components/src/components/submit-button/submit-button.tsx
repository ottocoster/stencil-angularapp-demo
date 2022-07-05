import { Component, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'submit-button',
  styleUrl: 'submit-button.css',
  shadow: true,
})
export class SubmitButton {
  @Event() submitted: EventEmitter<boolean>;

  render() {
    return (
      <button type="submit" onClick={_event => this.submitted.emit(true)}>
        Ola
      </button>
    );
  }
}
