app.controller("TodosCtrl", function ($scope) {
	$scope.todos = [
		{text: 'Build a stupid todo app', done: false}
	];

	$scope.remaining = function() {
		var count = 0;
		angular.forEach($scope.todos, function (todo) {
			count += todo.done ? 0 : 1;
		});
		return count;
	}

	$scope.addTodo = function() {
		$scope.todos.push({text: $scope.todoText, done: false});
		$scope.todoText = '';
	}

	$scope.archive = function() {
		var oldTodos = $scope.todos;
		$scope.todos = [];
		angular.forEach(oldTodos, function (todo) {
			if (!todo.done) $scope.todos.push(todo);
		});
	}
});