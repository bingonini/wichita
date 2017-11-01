//topup.js
//获取应用实例
const app = getApp()

Page({
  data: {
    topupType: [
      { name: 'Metfone', value: '1' },
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
    ],
    tips: ""
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
    var changed = {};

    for (var i = 0; i < this.data.topupType.length; i++) {
      if (this.data.selectedType && this.data.selectedType === this.data.topupType[i].value) {
        changed['topupType[' + i + '].checked'] = true
      } else {
        changed['topupType[' + i + '].checked'] = false
      }
    }

    if (this.data.tips && this.data.tips === "请选择充值类型") {
      changed["tips"] = "";
    }

    this.setData(changed);
  },
  topupAmountChange: function (e) {
    this.data.selectedAmount = e.detail.value;
    var changed = {};

    for (var i = 0; i < this.data.topupAmount.length; i++) {
      if (this.data.selectedAmount && this.data.selectedAmount === this.data.topupAmount[i].value) {
        changed['topupAmount[' + i + '].checked'] = true
      } else {
        changed['topupAmount[' + i + '].checked'] = false
      }
    }

    if (this.data.tips && this.data.tips === "请选择充值金额"){
      changed["tips"] = "";
    }

    this.setData(changed);
  },
  topupPhoneInput: function (e) {
    if (e.detail.value && e.detail.value !== ""){
      if (this.data.tips && this.data.tips === "请填写电话号码") {
        var changed = {};
        changed["tips"] = "";
        this.setData(changed);
      }
    }
  },
  topupConfirm: function () {
    var changed = {};

    if (!this.data.selectedType) {
      changed['tips'] = "请选择充值类型";
      this.setData(changed);
      return;
    }
    if (!this.data.selectedAmount) {
      changed['tips'] = "请选择充值金额";
      this.setData(changed);
      // wx.showToast({
      //   title : "请选择充值金额"
      // });
      return;
    }
    if (!this.data.topupPhone){
      changed['tips'] = "请填写电话号码";
      this.setData(changed);
      return;
    }

    changed["tips"] = "";
    this.setData(changed);
    // TODO :refill
  }
})
