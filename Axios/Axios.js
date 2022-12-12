const axios = require('axios')

const url = 'http://cdn.liyanhui.com/data.json'
axios
  .get(url, {
    params: {
      id: 19
    }
  })
  .then(function (response) {
    console.log(response)
  })
  .catch(function (error) {
    console.log(error)
  })
