angular.module('acodemy-app.directives.clearable-input', [])
.directive('clearableInput', function() {
  return {
    restrict: 'E',
    require: 'ngModel',
    link: function ($scope, $element, $attrs, modelCtrl) {
      const input = $element[0];

      input.addEventListener('input', () =>
        $scope.$apply(() => modelCtrl.$setViewValue(input.value))
      );

      modelCtrl.$render = () => input.value = modelCtrl.$viewValue;
    }
  };
});
