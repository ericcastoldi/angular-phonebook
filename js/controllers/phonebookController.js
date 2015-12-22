angular
  .module("phonebook")
  .controller("phonebookController", function($scope, contatosApi, operadorasApi, serialGenerator){

      $scope.app = 'Lista Telefônica';
      
      $scope.contatos = [
        {nome: "Ananias", telefone: "99873322", data: new Date(), operadora : {nome: "Tim", codigo: 41, categoria: "Celular"}},
      ];

      $scope.operadoras = [];

      var carregarContatos = function(){
        contatosApi
          .getContatos()
          .success(function(data){
            $scope.contatos = data;
          });
      };

      var carregarOperadoras = function(){
        operadorasApi
          .getOperadoras()
          .success(function(data){
            $scope.operadoras = data;
          });
      };

      $scope.adicionarContato = function(contato){
        contato.data = new Date();
        contato.serial = serialGenerator.generate();
        console.log(contato);
        
        contatosApi
          .saveContato(contato)
          .success(function(data){
            $scope.contatos = data;

            delete $scope.contato;
            $scope.contatoForm.$setPristine();
          });
        
        
      };

      $scope.isContatoSelecionado = function(contatos){
        return contatos.some(function(contato){
          return contato.selecionado;
        });
      };

      $scope.apagarContatos = function(contatos){
        $scope.contatos = contatos.filter(function(contato){
          if (!contato.selecionado) return contato;
        });
      };

      carregarContatos();
      carregarOperadoras();

  });