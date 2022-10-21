var videoApp = angular.module('videoApp', []);

videoApp.controller('VideoController',['$scope','$window','$sce', function($scope, $window,$sce){
    $scope.videoDisplay = document.getElementById("videoElement");
    $scope.videoSource = $sce.trustAsResourceUrl(window.videoSource);
    $scope.titleDisplay = window.titleDisplay;
    $scope.videoDescription = window.videoDescription;
}]);

console.log($('#video'));
