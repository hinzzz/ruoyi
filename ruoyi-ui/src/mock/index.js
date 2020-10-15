const Mock = require('mockjs');

Mock.mock('/getTheme', 'get', require('./theme.json'))
Mock.mock('/getConfigInfo', 'get', require('./info.json'))