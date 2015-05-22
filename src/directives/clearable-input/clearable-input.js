angular.module('acodemy-app.directives.clearable-input', [])
.directive('clearableInput', function() {
  return {
    restrict: 'E',
    require: 'ngModel',
    link: function ($scope, $element, $attrs, modelCtrl) {
      var input = $element[0];

      input.addEventListener('input', function() {
        $scope.$apply(function() {
          modelCtrl.$setViewValue(input.value);
        });
      });

      modelCtrl.$render = function() {
        input.value = modelCtrl.$viewValue;
      };
    }
  };
});
