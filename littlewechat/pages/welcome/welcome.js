Page({
  onTap: function () {
    // wx.navigateTo({
    //   url: '../posts/post',
    // })
    wx.redirectTo({
      url: '../posts/post',
    })
  },
  onUnload: function () {
    console.log('onUnload')
  },
  onHide: function () {
    console.log('onHide')
  }
})
