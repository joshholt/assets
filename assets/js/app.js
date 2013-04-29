/*globals angular, Templates, app*/

// #= require core
// #= require_tree controllers

app.directive("todos", function() {
  return {
    restrict: 'E',
    // Need to figure out isolate scope for this.
    // scope: {},
    template: Templates['todolist']()
  };
});