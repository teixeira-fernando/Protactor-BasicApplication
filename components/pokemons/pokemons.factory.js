(function () {
    angular.module('app').factory('Pokemons', Pokemons);

    function Pokemons($http) {
        var pokemons = [{
            "id": 1,
            "name": "Bulbasaur",
            "type1": "grama",
            "type2": "veneno",
            "attack": 49,
            "defense": 49,
            "hp" : 45,
            "image" : "/img/001.png"
        },{
            "id": 6,
            "name": "Charizard",
             "type1": "fogo",
            "type2": "voador",
            "attack": 84,
            "defense": 78,
            "hp" : 78,
            "image" : "/img/006.png"
        },{
            "id": 38,
            "name": "Ninetales",
            "type1": "fogo",
            "attack": 76,
            "defense": 75,
            "hp" : 73,
            "image" : "/img/038.png"
        },{
            "id": 150,
            "name": "Mewtwo",
            "type1": "psiquico",
            "attack": 110,
            "defense": 90,
            "hp" : 106,
            "image" : "/img/150.png"
        },{
            "id": 151,
            "name": "Mew",
            "type1": "psiquico",
            "attack": 100,
            "defense": 100,
            "hp" : 100,
            "image" : "/img/151.png"
        }];
        
        return {
            pokemons: pokemons,
            getById: getById,
            getAll: getAll
        }

        function getAll() {
            return pokemons;
        }
    

        function getById(id) {
            return pokemons.filter(function(poke){
                return poke.id.toString() === id;
            });
        }
    }
})();