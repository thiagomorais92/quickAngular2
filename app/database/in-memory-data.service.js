"use strict";
var Hero_1 = require('../model/Hero');
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            new Hero_1.Hero(11, 'Mr. Nice'),
            new Hero_1.Hero(12, 'Mr. Narco'),
            new Hero_1.Hero(13, 'Bombasto'),
            new Hero_1.Hero(14, 'Celeritas'),
            new Hero_1.Hero(15, 'Magneta'),
            new Hero_1.Hero(16, 'RubberMan'),
            new Hero_1.Hero(17, 'Dyama'),
            new Hero_1.Hero(18, 'Dr IQ'),
            new Hero_1.Hero(19, 'Magma'),
            new Hero_1.Hero(20, 'Tornado')
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map