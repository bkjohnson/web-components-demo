
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'input-field',
  styleUrl: 'input-field.css',
  shadow: true
})
export class InputField {
  /**
   * The input label
   */
  @Prop() label: string;


  render() {
    return <div>
      <label>{this.label}</label>
      <input />
      </div>;
  }
}
