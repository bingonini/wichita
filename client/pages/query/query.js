Page({
  data: {
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
  topupTypeChange: function (e) {
    data.selectedType = e.detail.value;
  },
  topupAmountChange: function (e) {
    data.selectedAmount = e.detail.value;
  },
  topupConfirm: function () {
    if (!data.selectedType) {
      wx.showToast({
        title: "请选择充值类型"
      });
    }
    if (!data.selectedAmount) {
      wx.showToast({
        title: "请选择充值金额"
      });
    }
    if (!data.topupPhone) {
      wx.showToast({
        title: "请填写电话号码"
      });
    }

    // TODO :refill
  }
})