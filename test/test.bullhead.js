/**
 * @author gejiawen
 * @date 2015/3/17
 */

var bh = require('../'),
    should = require('should');


should(bh(12000)).be.a.String;
should(bh(12000)).be.exactly('12,000.00');

should(bh(12000, 2)).be.a.String;
should(bh(12000, 2)).be.exactly('12,000.00');

should(bh(12000, 2, '$')).be.a.String;
should(bh(12000, 2, '$')).be.exactly('$12,000.00');

should(bh(12000000.887, 4, '$')).be.a.String;
should(bh(12000000.887, 4, '$')).be.exactly('$12,000,000.8870');

console.log('All test passed.');
