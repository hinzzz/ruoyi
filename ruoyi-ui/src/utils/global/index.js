
// 定义全局函数
exports.install = function (Vue, options) {
    Vue.prototype.copy = function (obj){
        return JSON.parse(JSON.stringify(obj))
    };
};