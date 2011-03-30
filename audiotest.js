var Assert = {
    assertEquals: function(actual, expected, msg) {
        if (actual !== expected) {
            throw (msg || 'assertEquals failed') +
                '. Expected: ' + expected + '; Actual: ' + actual;
        }
    },

    assertTrue: function(actual, msg) {
        if (actual !== true) {
            throw (msg || 'assertEquals failed') +
                '. Expected true' + '; Actual: ' + actual;
        }
    },

    assertFalse: function(actual, msg) {
        if (actual !== false) {
            throw (msg || 'assertEquals failed') +
                '. Expected false' + '; Actual: ' + actual;
        }
    },

    assertNull: function(actual, msg) {
        if (actual !== null) {
            throw (msg || 'assertNull failed') +
                '. Expected null' + '; Actual: ' + actual;
        }
    },

    assertNotNull: function(actual, msg) {
        if (actual === null) {
            throw (msg || 'assertNotNull failed') +
                '. Expected not null' + '; Actual: ' + actual;
        }
    },

    fail: function(msg) {
        throw (msg || 'fail');
    }
};

function test(name, test, iterations) {
    iterations = iterations || 1;
    var startTime = new Date().getTime();
    var passed = true;
    var exception = null;
    try {
        for (var i=0; i<iterations; i++) {
            test();
        }
    }
    catch (e) {
        passed = false;
        exception = e;
    }
    var endTime = new Date().getTime();
    var totalTime = endTime - startTime;
    var averageTime = totalTime / iterations;
    if (passed) {
        print('Test ' + name + ' passed');
        print(iterations + ' iterations in ' + totalTime + ' ms, ' +
              averageTime + ' ms per iteration');
    }
    else {
        print('Test ' + name + ' FAILED');
        print(exception);
    }
}
