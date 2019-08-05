/**
 * This mixin defines the methods necessary for a nav bar.
 * @polymerMixin
 * @mixinFunction
 */
const AspenNavBarMixin = superclass =>
  class extends superclass {
    static get properties() {
      return {
        /** The label for the nav item. */
        label: {
          type: String,
          value: ''
        },

        /** The name of the selected nav item. */
        selected: {
          type: String,
          value: ''
        }
      };
    }

    /**
     * This abstract method is called whenever the user makes a menu selection.
     * @param {Event} e the event object
     */
    handleSelect(e) {}

    connectedCallback() {
      super.connectedCallback();
      this.addEventListener('nav-event', e => this.handleSelect(e));
    }

    disconnectedCallback() {
      super.disconnectedCallback();
      this.removeEventListener('nav-event', e => this.handleSelect(e));
    }
  };
