//get
function fetchGet(url, data) {
  uni.request({
    url: url,
    data: data
  }).then(res => {
    if (res.code != 200) {
      return uni.showToast({
        title: '接口错误',
        duration: 2000
      });
    }
    return res
  })
}

// post
function fetchPost(url, data) {
  uni.request({
    url: url,
    data: data,
    method: 'post'
  }).then(res => {
    if (res.code != 200) {
      return uni.showToast({
        title: '接口错误',
        duration: 2000
      });
    }
    return res
  })
}