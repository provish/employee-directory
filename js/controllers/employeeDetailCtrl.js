angular.module('directory.employeeDetailCtrl', [])
/**
 * Controller to get the details of a particular employee
 */
.controller('EmployeeDetailCtrl', function ($scope, $stateParams, EmployeeService) {
  EmployeeService.findById($stateParams.employeeId).then(function (employee) {
    $scope.employee = employee;
  });
})
