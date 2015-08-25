
angular.module('directory.directives', [])
  .directive('employeeData', function () {
    return {
      scope: {
        item: "=data" 
      },
      restrict: 'AE',
      replace: false,
      template: '<div><h3>{{item.firstName}} {{item.lastName}}</h3></br>' +
      '<p>{{item.title}}</p> </div>',
    }
  });
