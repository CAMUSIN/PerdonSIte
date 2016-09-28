(function(){
  'use strict'
  angular.module('SorrySite',[])
  .controller('SorrySiteController', SorrySiteController);

  SorrySiteController.$inject = ['$scope', '$filter'];
  function SorrySiteController($scope,$filter){
    $scope.respuesta = {
       name: 'Aun no respondes.'
     };
  }
})
