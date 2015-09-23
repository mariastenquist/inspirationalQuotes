angular.module('quotesApp', ['ngStorage']);

angular.module('quotesApp').controller('mainController', ['$scope', '$localStorage', function($scope, $localStorage){


		$scope.quotes =[

		{
			author: "Peter Thiel",
			saying: "Encouraging young people to get real educations in the real world",
			rating: 5
		},

		{
			author: "Peter Thiel",
			saying: "Encouraging young people to get real educations in the real world",
			rating: 4
		},

		{
			author: "Peter Thiel",
			saying: "Encouraging young people to get real educations in the real world",
			rating: 3
		},


		{
			author: "Peter Thiel",
			saying: "Encouraging young people to get real educations in the real world",
			rating: 4
		},

		{
			author: "Peter Thiel",
			saying: "Encouraging young people to get real educations in the real world",
			rating: 5
		},

		]
		$scope.author = ""
		$scope.saying = ""

		$scope.submit = function(){
			// var tempObj  = {
			// 	author : $scope.author,
			// 	saying : $scope.saying
			// }
			$scope.quotes.push({
				author : $scope.author,
				saying : $scope.saying
			})
		$scope.author = ""
		$scope.saying = ""

		}


		$scope.rating =function(){

			for (var i = 0; i < $scope.quotes.length; i++) {
				$scope.quotes[i].stars = []
					for (var j = 0; j < $scope.quotes[i].rating; j++) {
						$scope.quotes[i].stars.push ('★')
					};
				

			};
		}
	
	$scope.rating()


		$scope.delete = function($index){
			$scope.quotes.splice($index,1)
			console.log($index)
		}




		


















	}])