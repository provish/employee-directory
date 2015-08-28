angular.module('directory.directives', [])
  .directive('employeeData', function () {
    return {
      scope: {
        item: "=data"
      },
      restrict: 'E',
      replace: false,
      template: '<div><h3>{{item.firstName}} {{item.lastName}}</h3></br>' +
      '<p>{{item.title}}</p> </div>',
      link: function (scope, elem, attr) {
        elem.on('click', function (ev) {
          elem.css('background-color', 'red !important');
        })
      }
    }
  });
