module.exports = {
    each: (collection, callback) => {
        if (Array.isArray(collection)) {
            for (var i = 0; i < collection.length; i++) {
                callback(collection[i], i, collection);
            }
        } else {
            for (var key in collection) {
                callback(collection[key], key, collection);
            }
        }
    },

    parse: (item, key) => {
        return `"${key}":${item}`;

    },

    assertEquals: function (actual, expected, testName) {
        var act = JSON.stringify(actual);
        var exp = JSON.stringify(expected);
        if (act === exp) {
            console.log('passed:' + testName);
        } else {
            console.log(`[${testName}] failed: expected ${expected} but got ${actual}`);
        }
    },

    isWhat: function (target) {
        if (typeof target === 'object' && !(target == null)) {
            if (Array.isArray(target)) {
                return 'array';
            }
            return 'object';
        } 
        if (typeof target === 'number') {
            return 'number';
        }
        if (typeof target === 'string') {
            return 'string';
        }
        if (target == null) { 
            return 'null';
        }
        if (typeof target == 'boolean') {
            return 'boolean';
        }
    },

    convertTo: function (convertee) {
        //this shold be able to do it.
        //let's write it in my book.
        if (typeof convertee === 'string') {
            return `"${convertee}"`;
        }
        if (typeof convertee === 'number') {
            return convertee;
        }
    },
}
