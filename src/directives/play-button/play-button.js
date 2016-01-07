angular.module('app')
  .directive('playButton', function($document) {
    class PlayButton {
      constructor($scope, $element) {
        this.injects = {$scope, $element};
        this.audio = $element.find('audio')[0];

        this.states = {
          stopped: {
            iconClass: 'fa fa-play',
            next: this.play.bind(this)
          },
          paused: {
            iconClass: 'fa fa-play',
            next: this.play.bind(this)
          },
          playing: {
            iconClass: 'fa fa-pause',
            next: this.pause.bind(this)
          }
        };

        this.state = this.states.stopped;
      }

      link() {
        const {$scope} = this.injects;

        PlayButton.list.push(this);

        $scope.$on('$destroy', () => {
          const index = PlayButton.list.indexOf(this);
          if (index >= 0) {
            PlayButton.list.splice(index, 1);
          }
        });

        this.audio.addEventListener('ended', () =>
          $scope.$apply(() => this.state = this.states.stopped)
        );

        $scope.$watch(
          () => this.src,
          (newSrc, oldSrc) => {
            if (oldSrc && this.state !== this.states.stopped) {
              this.stop();
            }
          }
        );
      }

      play() {
        PlayButton
          .list
          .filter((player) => player !== this)
          .forEach((player) => player.stop());

        if (this.audio.src !== this.src) {
          this.audio.src = this.src;
          this.audio.load();
        }

        this.audio.play();
        this.state = this.states.playing;
      }

      stop() {
        this.audio.pause();
        this.audio.currentTime = 0;
        this.state = this.states.stopped;
      }

      pause() {
        this.audio.pause();
        this.state = this.states.paused;
      }
    }

    PlayButton.list = [];

    const document = $document[0];
    const link = document.querySelector(
      'link[href="webcomponents/play-button/play-button.html"]'
    );
    const template = link.import.querySelector('template');

    return {
      restrict: 'E',
      require: ['playButton'],
      scope: {
        src: '@'
      },
      bindToController: true,
      controllerAs: 'button',
      template: template.innerHTML,
      link: function($scope, $element, $attrs, [ctrl]) {
        ctrl.link();
      },
      controller: PlayButton
    };
  });
