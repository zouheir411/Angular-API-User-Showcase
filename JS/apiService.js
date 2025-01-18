var apiService = function($http) {
    var getFirstUser = function() {  
        return $http.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(function(response) {
            return response.data;
        });
    };

    var getUserById = function(userId) {
        return $http.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(function(response) {
            return response.data;
        });
    };

    var getAllUsers = function() {  
        return $http.get('https://jsonplaceholder.typicode.com/users')
        .then(function(response) {
            return response.data;
        });
    };

    return {
        getFirstUser: getFirstUser,
        getUserById: getUserById,
        getAllUsers: getAllUsers
    };
};

app.factory('apiService', apiService);
