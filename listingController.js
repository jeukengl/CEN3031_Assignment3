// Controller for the listings
angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
	function($scope, Listings) {
		
		//----- NON-FUNCTIONS ------------------------------------------------------------------------------------------
		
		$scope.listings = Listings ;
		$scope.filteredListings = $scope.listings ;
		$scope.detailedInfo = undefined ;
		
		// Define array of filtered listings
		$scope.filteredListings = $scope.listings ;
		
		// Placeholder for new listing
		$scope.templ = {
			code: '',
			name: '',
			coordinates: {
				latitude: 0, 
				longitude: 0
			},
			address: ''
		} ;
		
		//----- FUNCTIONS ----------------------------------------------------------------------------------------------
		
		// Returns the listing in the filtered listings array pointed to by the specified index
		$scope.fListingAt = function(index) {
			return $scope.filteredListings[index] ;
		}
		
		// Adds a clone of the template listing to the listings
		$scope.addListing = function() {
			$scope.listings.push({
				code: $scope.templ.code,
				name: $scope.templ.name,
				coordinates: {
					latitude: $scope.templ.coordinates.latitude,
					longitude: $scope.templ.coordinates.longitude,
				},
				address: $scope.templ.address
			}) ;
		} ;
		
		// Deletes the currently selected listing and resets the detailed info view
		$scope.deleteListing = function(index) {
			
			// Find index of listing to delete
			var listing = $scope.fListingAt(index) ;
			var index = $scope.listings.indexOf(listing) ;
			if (index < 0) return ;
			
			// "Are you sure?!"
			if (!confirm("Really delete this listing?")) return ;
			
			// Splice the array at the appropriate index
			$scope.listings.splice(index, 1) ;
			
			$scope.detailedInfo = undefined ;
		} ;
		
		// Configures the detailed info view for the listing at the specified index
		$scope.showDetails = function(index) {
			$scope.detailedInfo = $scope.fListingAt(index) ;
		} ;
	}
]);