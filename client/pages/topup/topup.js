//topup.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    topupType: [
      { name: 'Metfone', value: '1', checked: 'true' },
      { name: 'Cellcard', value: '2' },
      { name: 'Smart', value: '3' }
    ],
    topupAmount: [
      { name: '1元', value: '1' },
      { name: '2元', value: '2' },
      { name: '5元', value: '5' },
      { name: '10元', value: '10' },
      { name: '20元', value: '20' },
      { name: '50元', value: '50' }
    ]
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回，所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  topupTypeChange: function (e) {
    this.data.selectedType = e.detail.value;
  },
  topupAmountChange: function (e) {
    this.data.selectedAmount = e.detail.value;
  },
  topupConfirm: function () {
    if (!this.data.selectedType) {
      wx.showToast({
        title : "请选择充值类型"
      });
      return;
    }
    if (!this.data.selectedAmount) {
      wx.showToast({
        title : "请选择充值金额"
      });
      return;
    }
    if (!this.data.topupPhone){
      wx.showToast({
        title : "请填写电话号码"
      });
      return;
    }

    // TODO :refill
  }
})
