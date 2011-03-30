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
                '. Expected true';
        }
    },

    assertFalse: function(actual, msg) {
        if (actual !== false) {
            throw (msg || 'assertEquals failed') +
                '. Expected false';
        }
    },

    assertNull: function(actual, msg) {
        if (actual !== null) {
            throw (msg || 'assertNull failed') +
                '. Expected null';
        }
    },

    assertNotNull: function(actual, msg) {
        if (actual === null) {
            throw (msg || 'assertNotNull failed') +
                '. Expected not null';
        }
    },

    fail: function(msg) {
        throw (msg || 'fail');
    }
};
