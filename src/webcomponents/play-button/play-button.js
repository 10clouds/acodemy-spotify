(function() {
  const ownerDocument = document._currentScript.ownerDocument;
  const template = ownerDocument.querySelector('template');

  const states = {
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

  class PlayButton extends HTMLElement {
    get src() {
      const attr = this.attributes.getNamedItem('src');
      return attr ? attr.value : '';
    }

    set src(value) {
      let attr = this.attributes.getNamedItem('src');
      if (!attr) {
        attr = document.createAttribute('src');
        this.attributes.setNamedItem(attr);
      }
      attr.value = value;
    }

    get state() {
      return this._stateName || 'stopped';
    }

    set state(name) {
      this._stateName = name;
      this.icon.className = states[name].iconClass;
    }

    createdCallback() {
      let button = this.querySelector('button');

      // play-button reused by angular with contents
      if (!button) {
        const clone = document.importNode(template.content, true);
        this.appendChild(clone);
        button = this.querySelector('button');
      }

      this.icon = button.querySelector('button i');
      this.audio = this.querySelector('audio');

      this.state = 'stopped';

      button.addEventListener('click', (function() {
        const nextMethod = states[this.state].next;
        this[nextMethod]();
      }).bind(this));
    };

    attachedCallback() {
      PlayButton.list.push(this);
    };

    detachedCallback() {
      const index = PlayButton.list.indexOf(this);

      if (index >= 0) {
        PlayButton.list.splice(index, 1);
      }
    };

    attributeChangedCallback(attrName, oldValue, newValue) {
      if (attrName === 'src') {
        this.stop();
      }
    };

    play() {
      PlayButton
      .list
      .filter((other) => other !== this)
      .forEach((other) => other.stop());

      if (this.src !== this.audio.src) {
        this.audio.src = this.src;
        this.audio.load();
      }

      this.audio.play();
      this.state = 'playing';
    };

    pause() {
      this.audio.pause();
      this.state = 'paused';
    };

    stop() {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.state = 'stopped';
    };
  }

  PlayButton.list = [];


  document.registerElement('play-button', PlayButton);

})();
