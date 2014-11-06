angular.module('todo',[])
	.controller('toDo',function($scope){
		$scope.todos =[
			{text:'jogging',done:false,editing:false},
			{text:'assignment',done:false,editing:false},
		];
		$scope.submit = function() {
			$scope.todos.push({text:$scope.todo, done:false,editing:false});
			$scope.todo = '';
		};			
		$scope.clearCompleted = function () {
			var completedTodos = $scope.todos;
			$scope.todos = [];
			 angular.forEach(completedTodos, function(todo) {
   				 if (!todo.done) $scope.todos.push(todo);
			});
		};
		$scope.editTodo = function(todo){
			todo.editing=true;
		};
    	$scope.doneEditing = function(todo){
			todo.editing=false;
		};
		

	});