Page({
  data: {
    queryTime: [
      { text: '最近一周', value: '1', checked: 'true'},
      { text: '最近一月', value: '2' },
      { text: '所有记录', value: '3' },
    ],
    selectedQueryTime : "1",
    topupRecord: [
      { phoneNumber: '13858002413', topupOn: '2017-11-17 17:13:00', topupAmount: '5', topupStatus: '1' },
      { phoneNumber: '13858002411', topupOn: '2017-11-13 12:13:00', topupAmount: '2', topupStatus: '1' },
      { phoneNumber: '13858002411', topupOn: '2017-09-07 21:31:00', topupAmount: '1', topupStatus: '1' },
    ]
  },
  queryTimeChange: function (e) {
    this.data.selectedQueryTime = e.detail.value;
    var changed = {};

    for (var i = 0; i < this.data.queryTime.length; i++) {
      if (this.data.queryTime && this.data.queryTime === this.data.queryTime[i].value) {
        changed['queryTime[' + i + '].checked'] = true
      } else {
        changed['queryTime[' + i + '].checked'] = false
      }
    }

    this.setData(changed);
  }
})