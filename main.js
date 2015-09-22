angular.module('quotesApp', ['ngStorage']);

angular.module('quotesApp').controller('mainController', ['$scope', '$localStorage', function($scope, $localStorage){


		$scope.quotes =[

		{
			author: "Peter Thiel",
			saying: "Encouraging young people to get real educations in the real world"
		},

		{
			author: "Peter Thiel",
			saying: "Encouraging young people to get real educations in the real world"
		},

		{
			author: "Peter Thiel",
			saying: "Encouraging young people to get real educations in the real world"
		},


		{
			author: "Peter Thiel",
			saying: "Encouraging young people to get real educations in the real world"
		},

		{
			author: "Peter Thiel",
			saying: "Encouraging young people to get real educations in the real world"
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

//
		$scope.delete = function($index){
			$scope.quotes.splice($index,1)
			console.log($index)
		}




		


















	}])