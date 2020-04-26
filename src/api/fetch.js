//get
function fetchGet(url, data) {
  return uni.request({
    url: url,
    data: data
  })
}

// post
function fetchPost(url, data) {
  return uni.request({
    url: url,
    data: data,
    method: 'post'
  })
}