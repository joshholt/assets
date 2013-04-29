/*globals angular, Templates*/

// #= require core
// #= require_tree controllers

app.directive("todos", function() {
  return {
    restrict: 'E',
    template: Templates['todolist']()
  }
});