import '@polymer/iron-flex-layout/iron-flex-layout';
import '@polymer/iron-icon';
import '@polymer/paper-icon-button';
import { html, PolymerElement } from '@polymer/polymer/polymer-element';
import { AspenNavMixin } from './aspen-nav-mixin.js';

/**
 * `aspen-nav-button` A navigation button.
 *
 * @summary ShortDescription.
 * @customElement
 * @polymer
 * @extends {Polymer.Element}
 */
class AspenNavButton extends AspenNavMixin(PolymerElement) {
  /**
   * String providing the tag name to register the element under.
   */
  static get is() {
    return 'aspen-nav-button';
  }

  static get template() {
    return html`
      <style>
        :host {
          display: block;
          --icon-size: 15vw;
          --icon-color: #2f466f;
          --label-color: #2f466f;
          --label-font-size: 0.8em;
          --label-font-family: 'Roboto';
        }

        .button > iron-icon {
          height: var(--icon-size);
          width: var(--icon-size);
          color: var(--icon-color);
          @apply --layout-center-justified;
          margin-left: auto;
          margin-right: auto;
        }

        .button > .label {
          font-family: var(--label-font-family);
          font-size: var(--label-font-size);
          color: var(--label-color);
          width: var(--icon-size);
          text-align: center;
          @apply --layout-center-justified;
        }

        .button {
          @apply --layout-vertical;
        }
      </style>

      <div id="[[navId]]" class="button" on-click="_handleClick">
        <iron-icon icon="[[icon]]"></iron-icon>
        <div class="label">[[label]]</div>
      </div>
    `;
  }

  /**
   * Instance of the element is created/upgraded. Use: initializing state,
   * set up event listeners, create shadow dom.
   * @constructor
   */
  constructor() {
    super();
  }

  /**
   * Use for one-time configuration of your component after local DOM is initialized.
   */
  ready() {
    super.ready();
  }
}

window.customElements.define(AspenNavButton.is, AspenNavButton);
