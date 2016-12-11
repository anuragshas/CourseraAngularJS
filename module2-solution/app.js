(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyListController', ToBuyListController)
.controller('AlreadyBoughtListController', AlreadyBoughtListController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


//TO Buy List controller
ToBuyListController.$inject = ['ShoppingListCheckOffService'];
function ToBuyListController(ShoppingListCheckOffService) {
  var list = this;

  list.items = ShoppingListCheckOffService.getToBuyItems();

  list.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };
}

//Already Bought List controller
AlreadyBoughtListController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtListController(ShoppingListCheckOffService) {
  var list = this;

  list.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var tobuyitems = [
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Donuts",
      quantity: "200"
    },
    {
      name: "Cookies",
      quantity: "300"
    },
    {
      name: "Chocolate",
      quantity: "5"
    },
    {
      name: "Nutella",
      quantity: "2"
    },
  ];

  var boughtitems=[];

  service.buyItem = function (itemIndex) {
    boughtitems.push(tobuyitems[itemIndex]);
    tobuyitems.splice(itemIndex, 1);
  };

  service.getToBuyItems = function () {
    return tobuyitems;
  };

  service.getAlreadyBoughtItems = function () {
    return boughtitems;
  };
}

})();
