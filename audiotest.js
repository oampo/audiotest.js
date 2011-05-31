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

    assertTypedArrayEquals: function(actual, expected, msg) {
        var length = actual.length;
        if (length != expected.length) {
            throw (msg || 'assertTypedArrayEquals failed') +
                '. Expected length: ' + expected.length + 
                '; Actual length: ' + length;
        }
        for (var i=0; i<length; i++) {
            if (actual[i] !== expected[i]) {
                throw (msg || 'assertTypedArrayEquals failed') +
                    '. Failure at index ' + i +
                    '; Expected: ' + expected[i] +
                    '; Actual: ' + actual[i];
            }
        }
    },

    assertContinuous: function(array, threshold, msg) {
        threshold = threshold || 0.1;
        var lastValue = null;
        var length = array.length;
        for (var i=0; i<length; i++) {
            var value = array[i];
            if (lastValue != null) {
                if (Math.abs(lastValue - value) > threshold) {
                    throw (msg || 'assertContinuous failed') +
                        '. Failure at index ' + i + '; Previous value: ' +
                        lastValue + '; Value: ' + value;
                }
            }
            lastValue = value;
        }
    },

    assertAudibleValues: function(array, msg) {
        var length = array.length;
        for (var i=0; i<length; i++) {
            var value = array[i];
            if (typeof value == 'undefined' ||
                value == null ||
                isNaN(value) ||
                value == Infinity ||
                value == -Infinity) {
                throw (msg || 'assertAudibleValues failed') +
                    '. Failure at index ' + i + '; Actual: ' + value;
            }
        }
    },

    assertValuesInRange: function(array, min, max, msg) {
        var length = array.length;
        if (typeof min == 'undefined' || min == null) {
            min = -1;
        }
        if (typeof max == 'undefined' || max == null) {
            max = 1;
        }
        for (var i=0; i<length; i++) {
            var value = array[i];
            if (value < min || value > max) {
                throw (msg || 'assertValuesInRange failed') +
                    '. Failure at index ' + i + '; Expected: ' +
                    min + ' < value < ' + max + '; Actual: ' + value;
            }
        }
    },

    assertValuesReach: function(array, min, max, msg) {
        var length = array.length;
        if (typeof min == 'undefined' || min == null) {
            min = -0.9;
        }
        if (typeof max == 'undefined' || max == null) {
            max = 0.9;
        }
        for (var i=0; i<length; i++) {
            var value = array[i];
            if (value < min || value > max) {
                return;
            }
        }
        throw (msg || 'assertValuesReach failed. ') + ' Expected: value < ' +
            min + ' || value > ' + max;
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
    print('');
}
