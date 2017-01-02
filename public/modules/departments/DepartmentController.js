universityApp.controller('DepartmentController', ['$scope', '$http', 'CommonService', function($scope, $http, CommonService) {
    $scope.listDepartment = function() {
        try {
            $http.get('/departments').then(function(resp) {
                $scope.departments = resp.data;
            });

        } catch (e) {
            console.log(e);
        }
    };

    $scope.addDepartment = function() {
        delete $scope.department._id;
        $http.post('/departments', $scope.department).then(function(resp) {
            $scope.departments.push(resp.data);
        }, function(resp) {
            var txt = document.createElement("textarea");
            txt.innerHTML = resp.data;
            alert(txt.value);
            txt = null;
        });
    };

    $scope.editDepartment = function(obj) {
        try {
            var department = {
                _id: obj._id,
                code: obj.code,
                name: obj.name
            };
            $scope.department = department;
        } catch (e) {
            console.log(e);
        }
    };

    $scope.updateDepartment = function() {
        try {
            $http.put('/departments', $scope.department).then(function(resp) {
                var department = $scope.departments.filter(function(obj) {
                    return obj._id === $scope.department._id;
                });
                department[0].code = resp.data.code;
                department[0].name = resp.data.name;
            });
        } catch (e) {
            console.log(e);
        }
    };

    $scope.removeDepartment = function(id) {
        try {
            if (confirm('Sure Remove?'))
                $http.delete('/departments/' + id).then(function(resp) {
                    $scope.departments = $scope.departments.filter(function(obj) {
                        return obj._id !== id;
                    });
                });
        } catch (e) {
            console.log(e);
        }
    };
    $scope.listDepartment();
}]);
