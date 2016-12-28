universityApp.controller('HomeController', ['$scope', '$rootScope', 'MetaService', 'CommonService', function($scope, $rootScope, MetaService, CommonService) {
    var metaInfo = {
        title: 'Gourbanga University',
        keyword: 'Gourbanga, Gourbanga University, University in WestBengal, Best University in WestBengal, Study in WestBengal, College in Malda',
        description: 'University of Gour Banga (Bengali: গৌড়বঙ্গ বিশ্ববিদ্যালয়) is a university established in 2008[1] in Malda, West Bengal, India.[2] Almost all of the 28 colleges in Malda, Uttar Dinajpur and Dakshin Dinajpur districts, with the exception of Raiganj University College, are affiliated with this university.'
    }

    $rootScope.metaservice = MetaService;
    $rootScope.metaservice.set(metaInfo.title, metaInfo.description, metaInfo.keyword);

    $scope.myInterval = 3000;

    // Initializing  slide rray
    $scope.slides = [{
            image: '../images/img00.jpg',
            text: 'Cute Fish'
        },
        {
            image: '../images/img01.jpg',
            text: 'Cute Fish'
        },
        {
            image: '../images/img02.jpg',
            text: 'Cute Fish'
        },
        {
            image: '../images/img03.jpg',
            text: 'Cute Fish'
        },
        {
            image: '../images/img04.jpg',
            text: 'Cute Fish'
        }
    ];

    var slides = $scope.slides;
    //console.log(slides);
}]);
