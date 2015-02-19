Polymer('clearable-input', {
  value: '',

  ready: function() {
    var valueChangedEvents = ['input'];


    var updateValue = (function () {
      this.value = this.$.input.value;
    }).bind(this);

    for (var i = 0; i < valueChangedEvents.length; i++) {
      var event = valueChangedEvents[i];
      this.$.input.addEventListener(event, updateValue);
    }

    updateValue();
  },

  valueChanged: function(oldValue, newValue) {
    this.$.input.value = newValue;
  },

  clear: function() {
    this.value = '';
    this.$.input.value = '';
    this.dispatchEvent(new Event('input', {}));
  }
});
