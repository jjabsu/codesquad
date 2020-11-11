const Map = function () {
    this.map = new Object();
};

Map.prototype = {
    put: function (key, value) {
        this.map[key] = value;
    },
    get: function (key) {
        return this.map[key];
    },
    containsKey: function (key) {
        return key in this.map;
    },
    containsValue: function (value) {
        for (let prop in this.map) {
            if (this.map[prop] == value) return true;
        }
        return false;
    },
    isEmpty: function (key) {
        return (this.size() == 0);
    },
    clear: function () {
        for (let prop in this.map) {
            delete this.map[prop];
        }
    },
    remove: function (key) {
        delete this.map[key];
    },
    keys: function () {
        let keys = new Array();
        for (let prop in this.map) {
            keys.push(prop);
        }
        return keys;
    },
    values: function () {
        let values = new Array();
        for (let prop in this.map) {
            values.push(this.map[prop]);
        }
        return values;
    },
    size: function () {
        let count = 0;
        for (let prop in this.map) {
            count++;
        }
        return count;
    }
};