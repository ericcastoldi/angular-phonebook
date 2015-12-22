angular.module("phonebook").config(function(serialGeneratorProvider){
  serialGeneratorProvider.setLength(25);
});