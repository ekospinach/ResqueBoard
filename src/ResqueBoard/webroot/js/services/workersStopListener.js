angular.module("app").factory("workersStopListener",["$rootScope",function(a){"use strict";var b=new SocketListener(a,"shutdown");return b}]);