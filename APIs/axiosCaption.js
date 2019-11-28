const axios = require('axios')

const instance = axios.create({
    baseURL: 'https://translate.yandex.net/api/v1.5/tr.json/',
});

module.exports = instance