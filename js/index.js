
var app=  angular.module("myApp",[]);
app.controller("imgCtr1",function($scope){
   $scope.images1=[{"imgPath":"../assets/images/dhoni.jpg","content":"Chennai Super Kings are a franchise cricket team based in Chennai, Tamil Nadu, India. They play in the Indian Premier League."},
                 {"imgPath":"../assets/images/dhoni.jpg","content":"Mahendra Singh Dhoni is an Indian former professional cricketer who was captain of the Indian national cricket team in limited-overs formats from 2007 to 2017 and in Test cricket from 2008 to 2014. He is a right handed wicket-keeper batsman."},
                 {"imgPath":"../assets/images/csk.jpg","content":"From a branding perspective, CSK, declared as the most valuable IPL franchisee (again valued by Brand Finance, London), began to differentiate itself, and amply benefitted from the high level of identification of power symbols and a sensory pal"},
                 {"imgPath":"../assets/images/jadeja.jpg","content":"Ravindrasinh Anirudhsinh Jadeja (born 6 December 1988), commonly known as Ravindra Jadeja, is an Indian international cricketer. He is an all-rounder, who bats left-handed and bowls left-arm orthodox spin. He was the captain of the Chennai"}
                ];
     $scope.images2=[{"imgPath":"../assets/images/csk logo.png","content":"Chennai Super Kings are a franchise cricket team based in Chennai, Tamil Nadu, India. They play in the Indian Premier League."},
                {"imgPath":"../assets/images/dhoni.jpg","content":"Chennai Super Kings are a franchise cricket team based in Chennai, Tamil Nadu, India. They play in the Indian Premier League."},
                {"imgPath":"../assets/images/csk.jpg","content":"Chennai Super Kings are a franchise cricket team based in Chennai, Tamil Nadu, India. They play in the Indian Premier League."}];
    $scope.csklogos=[{"csklogo":"../assets/images/csk logo.png","content":"Chennai Super Kings are a franchise cricket team based in Chennai, Tamil Nadu, India. They play in the Indian Premier League."},
                  {"csklogo":"../assets/images/csk logo.png","content":"Chennai Super Kings are a franchise cricket team based in Chennai, Tamil Nadu, India. They play in the Indian Premier League."},
                  {"csklogo":"../assets/images/csk logo.png","content":"Chennai Super Kings are a franchise cricket team based in Chennai, Tamil Nadu, India. They play in the Indian Premier League."},
                  {"csklogo":"../assets/images/csk logo.png","content":"Chennai Super Kings are a franchise cricket team based in Chennai, Tamil Nadu, India. They play in the Indian Premier League."}];
                          
    // $scope.img1=person.img1Path;
    // $scope.img2=person.img2Path;
    // $scope.img3=person.img3Path;
    // $scope.img4=person.img4Path;
    // $scope.img5=person.img5Path;
    const content={"content1":"Chennai Super Kings are a franchise cricket team based in Chennai, Tamil Nadu, India. They play in the Indian Premier League.",
                    "content2":"Mahendra Singh Dhoni is an Indian former professional cricketer who was captain of the Indian national cricket team in limited-overs formats from 2007 to 2017 and in Test cricket from 2008 to 2014. He is a right handed wicket-keeper batsman.",
                    "content3":"From a branding perspective, CSK, declared as the most valuable IPL franchisee (again valued by Brand Finance, London), began to differentiate itself, and amply benefitted from the high level of identification of power symbols and a sensory palette of unique visual, verbal, and digital expression.",
                   "content4":"Ravindrasinh Anirudhsinh Jadeja (born 6 December 1988), commonly known as Ravindra Jadeja, is an Indian international cricketer. He is an all-rounder, who bats left-handed and bowls left-arm orthodox spin. He was the captain of the Chennai Super Kings in the Indian Premier League. He represents Saurashtra in first-class cricket. He is considered as one of the best fielders in the current decade.",
                   }
    $scope.cont1=content.content1;
    $scope.cont2=content.content2;
    $scope.cont3=content.content3;
    $scope.cont4=content.content4;
    $scope.url=content.videoUrl;
    
    // $scope.img1=person.img1Path;
})
// app.filter("trustUrl", ['$sce', function ($sce) {
//     return function (recordingUrl) {
//         return $sce.trustAsResourceUrl(recordingUrl);
//     };
// }]);

