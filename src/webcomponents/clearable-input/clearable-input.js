Polymer({
  is: 'clearable-input',

  properties: {
    value: {
      type: String,
      notify: true,
      observer: 'onValueChanged',
    },
    placeholder: {
      type: String,
      notify: true,
    },
    _clearBtnClass: {
      type: String,
    }
  },

  clear: function() {
    this.value = '';
    this.dispatchEvent(new Event('input', {}));
  },

  onValueChanged: function() {
    this._clearBtnClass = (!!this.value ? 'visible' : '');
  }
});
