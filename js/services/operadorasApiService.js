angular
  .module("phonebook")
  .service("operadorasApi", function($http, config){
    this.getOperadoras = function(){
        return $http.get(config.baseUrl + "/operadoras");
    };
  });