angular.module('quotesApp', ['ngStorage']);

angular.module('quotesApp').controller('mainController', ['$scope', '$localStorage', function($scope, $localStorage){
	$scope.deletes = function  () {
		$localStorage.$reset();
		location.reload();
	}
	

		$scope.quotes =[

			{
				author: "Muhammad Ali",
				saying: "I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.",
				rating: 4
	
			},

		{
			author: "Maya Angelou",
			saying: "Try to be a rainbow in someone's cloud.",
			rating: 4
		},

		{
			author: "Milton Berle",
			saying: "If opportunity doesn't knock, build a door.",
			rating: 3
		},


		{
			author: "Francis of Assisi",
			saying: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
			rating: 5
			
		},

			{
				author: "Ronald Reagan",
				saying: "We can't help everyone, but everyone can help someone.",
				rating: 5
			},
		]

		$scope.$storage = $localStorage.$default(

		{
    		counter: 0,
    		quotes: $scope.quotes
		})



		$scope.author = ""
		$scope.saying = ""

		$scope.submit = function(){
			$localStorage.quotes.push({
				author : $scope.author,
				saying : $scope.saying,
				rating: 2,
			})
		$scope.author = ""
		$scope.saying = ""
		console.log($localStorage.quotes)

		}


		$scope.rating =function(){

			for (var i = 0; i < $localStorage.quotes.length; i++) {
				$localStorage.quotes[i].stars = []
					for (var j = 0; j < $localStorage.quotes[i].rating; j++) {
						$localStorage.quotes[i].stars.push ('★')
					};
			};
		}
	
	$scope.rating()

		$scope.delete = function(index){
			$localStorage.quotes.splice(index,1)
			console.log(index)
		}

		

}])


//need to sort on ng-repeat to sort quotes, and sort quotes by ratings.
// $scope.quotes.sort(author);
// ng-rating

