angular
  .module("phonebook")
  .provider("serialGenerator", function(){
    var _serialLength = 20;

    this.setLength = function(length){
      _serialLength = length;
    };

    this.$get = function(){
      return{
        generate :function(){
          var serial = "";

          while (serial.length < _serialLength){
            serial += String.fromCharCode(Math.floor(Math.random() * 64) + 32);
          }

          return serial;
        }
      };
    };
  });




