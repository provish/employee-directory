
angular.module('directory.controllers', [])

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

/**
 * Controller to get the details of a particular employee
 */
  .controller('EmployeeDetailCtrl', function ($scope, $stateParams, EmployeeService) {
    EmployeeService.findById($stateParams.employeeId).then(function (employee) {
      $scope.employee = employee;
    });
  })

/**
 * Controller to get the details of a particular employee
 */
  .controller('EmployeeReportsCtrl', function ($scope, $stateParams, EmployeeService) {
    EmployeeService.findByManager($stateParams.employeeId).then(function (employees) {
      $scope.employees = employees;
    });
  });
