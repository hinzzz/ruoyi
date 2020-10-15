

exports.install = function (Vue, options) {
    Vue.prototype.copy = function (obj){
        return JSON.parse(JSON.stringify(obj))
    };
};