// index.js
Page({
  data: {},

  openCamera: function () {
    wx.chooseMedia({
      count: 1,
      mediaType: ['image', 'video'],
      sourceType: ['camera'],
      success: function (res) {
        console.log("摄像头已打开", res);
      },
      fail: function (err) {
        console.error("摄像头打开失败", err);
      }
    });
  }
});


