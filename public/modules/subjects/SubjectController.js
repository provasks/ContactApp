universityApp.controller('SubjectController', ['$scope', '$http', 'CommonService', function($scope, $http, CommonService) {
    $scope.listSubject = function() {
        try {
            $http.get('/subjects').then(function(resp) {
                $scope.subjects = resp.data;
            });

        } catch (e) {
            console.log(e);
        }
    };

    $scope.addSubject = function() {
        delete $scope.subject._id;
        $http.post('/subjects', $scope.subject).then(function(resp) {
            $scope.subjects.push(resp.data);
        }, CommonService.showError);
    };

    $scope.editSubject = function(c) {
        try {
            var subject = {
                _id: c._id,
                code: c.code,
                name: c.name,
                credit: c.credit
            };
            $scope.subject = subject;
        } catch (e) {
            console.log(e);
        }
    };

    $scope.updateSubject = function() {
        try {
            $http.put('/subjects', $scope.subject).then(function(resp) {
                var subject = $scope.subjects.filter(function(obj) {
                    return obj._id === $scope.subject._id;
                });
                subject[0].name = resp.data.name;
                subject[0].code = resp.data.code;
                subject[0].credit = resp.data.credit;
            }, CommonService.showError);
        } catch (e) {
            console.log(e);
        }
    };

    $scope.removeSubject = function(id) {
        try {
            if (confirm('Sure Remove?'))
                $http.delete('/subjects/' + id).then(function(resp) {
                    $scope.subjects = $scope.subjects.filter(function(obj) {
                        return obj._id !== id;
                    });
                }, CommonService.showError);
        } catch (e) {
            console.log(e);
        }
    };
    $scope.listSubject();
}]);
