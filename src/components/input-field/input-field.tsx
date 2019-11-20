
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


  private doSomething(): number {
    return Math.random()
  }

  render() {
    return <div>
      <label>{this.label}</label>
      <input />
      <span> Your random number is {this.doSomething()}</span>

      <slot></slot>

      <div class="sidebar">
        <slot  name="right"></slot>
      </div>
      </div>;
  }
}
