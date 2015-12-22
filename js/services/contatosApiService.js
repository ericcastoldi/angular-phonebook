angular
  .module("phonebook")
  .factory("contatosApi", function($http, config){
    
    var _contatosServiceUrl = config.baseUrl + "/contatos";

    var _getContatos = function(){
      return $http.get(_contatosServiceUrl);
    };
    
    var _saveContato = function(contato){
      return  $http.post(_contatosServiceUrl, contato);
    };

    return {
      getContatos: _getContatos,
      saveContato: _saveContato
    };

  });