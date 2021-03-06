var app = getApp();
const util = require('../../utils/util.js');
Page({
  data: {
    gridList: [
      { enName: 'wallet', zhName: '我的钱包'},
      { enName: 'order', zhName: '我的记录' },
      { enName: 'case', zhName: '我的病历' },
      { enName: 'feedback', zhName: '意见反馈' },
      { enName: 'setting', zhName: '设置' }
    ],
    contact_label:'联系客服'
  },
  onLoad: function (cb) {
    var that = this;
    // 检测是否存在用户信息
    if (app.globalData.userInfo != null) {
      that.setData({
        userInfo: app.globalData.userInfo
      })
    } else {
      app.getUserInfo(function (userInfo){
        that.setData({
          userInfo: userInfo
        })
      })
    }
    typeof cb == 'function' && cb()
  },
  onShow: function () {
    var that = this
  },
  onPullDownRefresh: function () {
    this.onLoad(function () {
      wx.stopPullDownRefresh()
    })
  },
  viewGridDetail: function (e) {
    var data = e.currentTarget.dataset
      wx.navigateTo({
        url: "../" + data.url + '/' + data.url
      })
  }, onShareAppMessage: function () {
    return {
      title: '名医跨境平台-个人中心',
      path: '/pages/my/my',
      success: function (res) {
        // 转发成功
        console.log("转发成功");
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})