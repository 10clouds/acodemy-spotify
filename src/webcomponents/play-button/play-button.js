'use strict';
var playButtons = [];

Polymer('wc-play-button', {
  src: undefined,
  loadedSrc: undefined,

  ready: function() {

    this.play = function() {
      if (!this['audio-src']) { return; }
      
      this.$.audio.src = this['audio-src'];
      if (this.loadedSrc !== this['audio-src']) {
        this.state = this.states.loading;
        this.$.audio.load();
      }

      playButtons.forEach( function (button) {
        button.pause();
      });

      this.$.audio.play();
    };

    this.stop = function() {
      this.$.audio.pause();
      this.$.audio.currentTime = 0;
      this.state = this.states.stopped;
    };

    this.pause = function() {
      this.$.audio.pause();
      this.state = this.states.paused;
    };

    this.states = {
      stopped: {
        icon: 'fa fa-play',
        next: this.play.bind(this)
      },
      paused: {
        icon: 'fa fa-play',
        next: this.play.bind(this)
      },
      playing: {
        icon: 'fa fa-pause',
        next: this.pause.bind(this)
      },
      loading: {
        icon: 'fa fa-spin fa-circle-o-notch',
        next: function() {}
      }
    };

    this.state = this.states.stopped;

    this.click = function(){
      this.state.next();
    };

    this.$.audio.addEventListener.call(this, 'playing', function() {
      this.state = this.states.playing;
    });

    this.$.audio.addEventListener.call(this, 'ended', function() {
      this.state = this.states.stopped;
    });
  },
  attached: function() {
    playButtons.push(this);
  },
  srcChanged: function(attrName, oldVal, newVal) {
    console.log(oldVal, newVal);
  }
});
