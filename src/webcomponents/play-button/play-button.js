(function() {
  var ownerDocument = document._currentScript.ownerDocument;
  var template = ownerDocument.querySelector('template');

  var states = {
    stopped: {
      iconClass: 'fa fa-play',
      next: 'play'
    },
    paused: {
      iconClass: 'fa fa-play',
      next: 'play'
    },
    playing: {
      iconClass: 'fa fa-pause',
      next: 'pause'
    }
  };

  var players = [];

  function PlayButton() {}

  PlayButton.prototype = Object.create(HTMLElement.prototype);

  Object.defineProperty(PlayButton.prototype, 'src', {
    enumerable: true,
    get: function() {
      var attr = this.attributes.getNamedItem('src');
      return attr ? attr.value : '';
    },
    set: function(value) {
      var attr = this.attributes.getNamedItem('src');
      if (!attr) {
        attr = document.createAttribute('src');
        this.attributes.setNamedItem(attr);
      }
      attr.value = value;
    }
  });

  Object.defineProperty(PlayButton.prototype, 'state', {
    enumerable: true,
    get: function() {
      return this._stateName || 'stopped';
    },
    set: function(name) {
      this._stateName = name;
      this._icon.className = states[name].iconClass;
    }
  });

  PlayButton.prototype.createdCallback = function() {
    var shadow = this.createShadowRoot();
    var clone = document.importNode(template.content, true);
    shadow.appendChild(clone);
    var button = shadow.querySelector('button');

    this._icon = button.querySelector('button i');
    this._audio = shadow.querySelector('audio');

    this.state = 'stopped';

    button.addEventListener('click', (function() {
      var nextMethod = states[this.state].next;
      this[nextMethod]();
    }).bind(this));
  };

  PlayButton.prototype.attachedCallback = function() {
    players.push(this);
  };

  PlayButton.prototype.detachedCallback = function() {
    var index = players.indexOf(this);
    players.splice(index, 1);
  };

  PlayButton.prototype.attributeChangedCallback = function(
    attrName, oldValue, newValue
  ) {
    if (attrName === 'src') {
      this.stop();
    }
  };

  PlayButton.prototype.play = function() {
    players.forEach(function(other) {
      if (other !== this) {
        other.stop();
      }
    });

    if (this.src !== this._audio.src) {
      this._audio.src = this.src;
      this._audio.load();
    }

    this._audio.play();
    this.state = 'playing';
  };

  PlayButton.prototype.pause = function() {
    this._audio.pause();
    this.state = 'paused';
  };

  PlayButton.prototype.stop = function() {
    this._audio.pause();
    this._audio.currentTime = 0;
    this.state = 'stopped';
  };

  document.registerElement('play-button', PlayButton);

})();
