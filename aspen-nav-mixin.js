/**
 * This mixin provides a consistent API for all navigation item components.
 * The are the actual items that you click upon to navigate throughout the system.
 * @polymerMixin
 * @mixinFunction
 */
export const AspenNavMixin = superclass =>
  class extends superclass {
    static get properties() {
      return {
        /** The id of the navigation button. */
        navId: {
          type: String,
          value: ''
        },

        /** The name of the icon. */
        icon: {
          type: String,
          value: ''
        },

        /** The text of the label. */
        label: {
          type: String,
          value: ''
        }
      };
    }

    /**
     * This method dispatches a nav-event whenever a nav item is clicked on.
     * @param {Event} e the event object
     */
    _handleClick(e) {
      this.dispatchEvent(
        new CustomEvent('nav-event', {
          bubbles: true,
          composed: true,
          detail: {
            navId: this.navId,
            label: this.label
          }
        })
      );
    }
  };
