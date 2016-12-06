(function() {

    angular.module('app')
        .controller('BooksController', BooksController);


    function BooksController(books,badgeService) {

        var vm = this;
        vm.appName = books.appName;

    }


}());