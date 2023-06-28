import { html, css, LitElement } from 'lit';

export class TallyCount extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: 'Roboto', sans-serif;
      color: var(--color-white);
      background: var(--color-medium-grey);
      height: 100vh;
      padding: 10px;
    }

    .header {
      text-align: center;
      color: var(--color-light-grey);
    }

    .header_title {
      font-size: 3rem;
      font-weight: 900;
    }

    .controls {
      background: #31c48d;
      padding: 10px;
      margin: 10px;
    }

    sl-menu-item {
      padding: 5px;
      margin: 5px;
    }

    .counter {
      background: var(--color-dark-grey);
      color: var(--color-green);
      text-align: center;
      display: block;
      font-size: 100px;
      margin: 10px;
      padding: 10px;
    }

    .counter_actions {
      display: flex;
    }

    .number {
      color: #31c48d;
    }

    .counter_button {
      background: none;
      width: 50%;
      border-width: 1px;
      color: var(--color-white);
      font-size: 2rem;
      height: 3rem;
      border: 1px solid var(--color-light-grey);
      transition: transform 0.3s;
      transform: translateY(0);
      border-radius: 10px;
      text-align: center;
    }

    .counter_button:active {
      background: var(--color-medium-grey);
      transform: translateY(2%);
    }

    .counter_button:disabled {
      opacity: 0.2;
    }

    .counter_button_first {
      border-right: 1px solid var(--color-light-grey);
    }

    .footer {
      background: var(--color-dark-grey);
      color: var(--color-light-grey);
      padding: 2rem;
      font-size: 0.8rem;
      text-align: center;
    }

    .footer_link {
      color: var(--color-white);
    }
  `;

  static properties = {
    counterValue: { type: Number },
  };

  constructor() {
    super();
    this.counterValue = 0;
  }

  increaseNumber() {
    this.counterValue++;
  }

  decreaseNumber() {
    this.counterValue--;
  }

  resetNumber() {
    this.counterValue = 0;
  }

  render() {
    return html`
      <sl-header class="header">
        <h1 class="header_title">Tally Count</h1>
      </sl-header>
      <sl-aside class="controls">
        <sl-form>
          <sl-select label="Display">
            <sl-menu-item>Single</sl-menu-item>
            <sl-menu-item>Multiple</sl-menu-item>
          </sl-select>
          <sl-select label="Counter">
            <sl-menu-item>Counter1</sl-menu-item>
            <sl-menu-item>Counter2</sl-menu-item>
            <sl-menu-item>Counter3</sl-menu-item>
          </sl-select>
          <sl-button>Settings</sl-button>
        </sl-form>
      </sl-aside>

      <sl-main>
        <div class="counter">
          <span id="number" class="number">${this.counterValue}</span><br>
        </div>

        <div class="counter_actions">
          <sl-button class="counter_button" @click=${this.decreaseNumber} id="subtract" counter_button_first>
            subtract
          </sl-button>
          <sl-button class="counter_button" @click=${this.increaseNumber} id="add">add</sl-button>
          <sl-button class="counter_button" @click=${this.resetNumber} id="reset" counter_button_first>
            reset
          </sl-button>
        </div>
      </sl-main>

      <sl-footer class="footer">
        Inspired by
        <a class="footer_link" href="https://tallycount.app/">Tally Count</a>.
        Note that this is merely a student practice project for learning JavaScript.
      </sl-footer>
    `;
  }
}

customElements.define('tally-count', TallyCount);
