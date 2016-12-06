/**
 * Created by phuc.ngo on 6/12/2016.
 */

(function () {
    angular.module('app').value('badgeService', {
        retrieveBadge: retrieveBadge
    });
    function retrieveBadge(minuteRead) {
        var badge = null;
        switch (true) {
            case (minuteRead > 5000):
                badge = 'Book Worm';
                break;
            case (minuteRead > 2000):
                badge = 'Page Turner';
                break;
            default:
                badge = 'Getting started';
        }
        return badge;
    }
})();
