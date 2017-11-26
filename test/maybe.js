var assert = require('assert');
var maybeFirst = require('../src/components/maybe');
//

describe('maybeFirst', function() {
    it('returns the first element of an array', function() {
        var result = maybeFirst([1, 2, 3]);

        assert.equal(result, 1, 'maybeFirst([1, 2, 3]) is 1');
    });
});