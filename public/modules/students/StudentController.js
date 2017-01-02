universityApp.controller('StudentController', ['$scope', '$http', 'CommonService', function($scope, $http, CommonService) {
    $scope.listStudent = function() {
        try {
            $http.get('/students').then(function(resp) {
                $scope.students = resp.data;
            });

        } catch (e) {
            console.log(e);
        }
    };

    $scope.addStudent = function() {
        delete $scope.student._id;
        $http.post('/students', $scope.student).then(function(resp) {
            $scope.students.push(resp.data);
        }, function(resp) {
            //alert(htmlDecode(resp.data));
            var txt = document.createElement("textarea");
            txt.innerHTML = resp.data;
            alert(txt.value);
            txt = null;
        });
    };

    $scope.editStudent = function(c) {
        try {
            var student = {
                _id: c._id,
                name: c.name,
                email: c.email,
                password: c.password,
                contact: c.contact
            };
            $scope.student = student;
        } catch (e) {
            console.log(e);
        }
    };

    $scope.updateStudent = function() {
        try {
            $http.put('/students', $scope.student).then(function(resp) {
                var student = $scope.students.filter(function(obj) {
                    return obj._id === $scope.student._id;
                });
                student[0].name = resp.data.name;
                student[0].email = resp.data.email;
                student[0].password = resp.data.password;
                student[0].contact = resp.data.contact;
            });
        } catch (e) {
            console.log(e);
        }
    };

    $scope.removeStudent = function(id) {
        try {
            if (confirm('Sure Remove?'))
                $http.delete('/students/' + id).then(function(resp) {
                    $scope.students = $scope.students.filter(function(obj) {
                        return obj._id !== id;
                    });
                });
        } catch (e) {
            console.log(e);
        }
    };
    $scope.listStudent();
}]);
