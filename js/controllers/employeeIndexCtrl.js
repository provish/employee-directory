angular.module('directory.employeeIndexCtrl', [])

/**
 * Controller to show all employees data
 */
.controller('EmployeeIndexCtrl', function ($scope, EmployeeService) {

  $scope.searchKey = "";

  /**
   * Function to clear Search
   */
  $scope.clearSearch = function () {
    $scope.searchKey = "";
    findAllEmployees();
  }

  /**
   * Function to search employee by name
   */
  $scope.search = function () {
    EmployeeService.findByName($scope.searchKey).then(function (employees) {
      $scope.employees = employees;
    });
  }

  /**
   * Function to get the list of all employees
   */
  var findAllEmployees = function () {
    EmployeeService.findAll().then(function (employees) {
      $scope.employees = employees;
    });
  }

  findAllEmployees();

})


