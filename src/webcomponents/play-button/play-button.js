(function() {
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

  Polymer('play-button', {
    src: '',
    _iconClass: '',

    get state() {
      return this._state;
    },

    set state(name) {
      this._state = name;
      this._iconClass = states[name].iconClass;
    },

    ready: function() {
      this.state = 'stopped';
    },

    attached: function() {
      players.push(this);
    },

    detached: function() {
      var index = players.indexOf(this);
      players.splice(index, 1);
    },

    onClick: function() {
      var nextMethod = states[this.state].next;
      this[nextMethod]();
    },

    srcChanged: function(oldValue, newValue) {
      this.stop();
    },

    play: function() {
      players.forEach(function(other) {
        if (other !== this) {
          other.stop();
        }
      });

      if (this.src !== this.$.audio.src) {
        this.$.audio.src = this.src;
        this.$.audio.load();
      }

      this.$.audio.play();
      this.state = 'playing';
    },

    pause: function() {
      this.$.audio.pause();
      this.state = 'paused';
    },

    stop: function() {
      this.$.audio.pause();
      this.$.audio.currentTime = 0;
      this.state = 'stopped';
    }

  });

})();
