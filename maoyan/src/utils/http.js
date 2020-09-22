const http = {
  get(url, params) {
    // params   {a:1,b:2}
    // a=1&b=2
    let str = ''
    if (params) {
      let arr = []
      Object.keys(params).forEach((item, index) => {
        arr.push(item + '=' + params[item])
      })
      //arr    [a=1,b=2]
      str = arr.join('&')  // a=1&b=2
    }
    
    return fetch(url + '?' + str)
      .then(response => response.json())
  }
}

export default http;