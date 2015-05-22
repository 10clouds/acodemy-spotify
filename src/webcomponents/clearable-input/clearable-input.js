Polymer('clearable-input', {
  value: '',

  clear: function() {
    this.value = '';
    this.dispatchEvent(new Event('input', {}));
  }
});
