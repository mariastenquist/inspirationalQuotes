angular.module('quotesApp', ['ngStorage']);

angular.module('quotesApp').controller('mainController', ['$scope', '$localStorage', function($scope, $localStorage){
	$scope.deletes = function  () {
		$localStorage.$reset();
		location.reload();
	}
	$scope.$storage = $localStorage.$default(

		{
    		counter: [

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
		});

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

		$scope.author = ""
		$scope.saying = ""

		$scope.submit = function(){
			// var tempObj  = {
			// 	author : $scope.author,
			// 	saying : $scope.saying
			// }
			$localStorage.counter.push({
				author : $scope.author,
				saying : $scope.saying
			})
		$scope.author = ""
		$scope.saying = ""

		}


		$scope.rating =function(){

			for (var i = 0; i < $localStorage.counter.length; i++) {
				$localStorage.counter[i].stars = []
					for (var j = 0; j < $localStorage.counter[i].rating; j++) {
						$localStorage.counter[i].stars.push ('★')
					};
			};
		}
	
	$scope.rating()

		$scope.delete = function(index){
			$localStorage.counter.splice(index,1)
			console.log(index)
		}

		// $scope.delete()

}])


//need to sort on ng-repeat to sort quotes, and sort quotes by ratings.
// $scope.quotes.sort(author);
// ng-rating

