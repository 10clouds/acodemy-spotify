(function() {

  const PlayStates = {
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

  Polymer({
    is: 'play-button',
    properties: {
      src: {
        type: String,
        notify: true,
        observer: 'srcChanged',
      },
      state: {
        type: String,
        observer: 'stateChanged',
        default: 'stopped',
      },
      _iconClass: String,
    },

    stateChanged: function(stateName) {
      this._iconClass = PlayStates[stateName].iconClass;
    },

    srcChanged: function() {
      this.stop();
    },

    onClick: function() {
      var nextMethod = PlayStates[this.state].next;
      this[nextMethod]();
    },

    attached: function() {
      players.push(this);
    },

    detached: function() {
      var index = players.indexOf(this);
      players.splice(index, 1);
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
