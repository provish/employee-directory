angular.module('directory.employeeReportCtrl', [])

/**
 * Controller to get the direct reports of a particular employee
 */
  .controller('EmployeeReportsCtrl', function ($scope, $stateParams, EmployeeService) {
    EmployeeService.findByManager($stateParams.employeeId).then(function (employees) {
      $scope.employees = employees;
    });
  });
