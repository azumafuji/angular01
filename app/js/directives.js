'use strict';

/* Directives */


angular.module('myApp.directives', [])
    .directive('appVersion', ['version', function(version) {
        return function(scope, elm, attrs) {
            elm.text(version);
        };
    }])

    .directive('addBlah', function() {
        return function(scope, elm, attrs) {
            scope.$on('LastElem', function(event) {
                elm.isotope({
                    itemSelector : '.box',
                    resizesContainer: true
                });

            });

        };
    })

    .directive('listItem', function() {
        return function (scope, element, attrs) {
            if (scope.$last) {
                scope.$emit('LastElem');
            }
        };
    });
