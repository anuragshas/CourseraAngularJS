(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.checkIfTooMuch = function () {
      var itemCountMsg = countItems($scope.items);
      $scope.msg = itemCountMsg;
    };
  }

  function countItems(str) {
    var itemCountMsg = "";
    if(str == "" || str == undefined) {
      itemCountMsg = "Please enter data first";
    }
    else{
      var array = str.split(",");
      var count=0;
      for (var i = 0; i < array.length; i++) {
        if(array[i].trim()!=""){
          count++;
        }
      }
      if(count<=3){
        itemCountMsg = "Enjoy!";
      }
      else {
        itemCountMsg = "Too much!";
      }
    }
    return itemCountMsg;
  };

})();
